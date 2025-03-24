from datetime import timedelta
from typing import Any
from fastapi import APIRouter, Body, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ...core import security
from ...core.config import settings
from ...core.deps import get_db, get_current_user
from ...models.user import User
from ...schemas.user import UserCreate, User as UserSchema, Token
from ...services import auth_service

router = APIRouter()

@router.post("/login", response_model=Token)
async def login_access_token(
    db: AsyncSession = Depends(get_db),
    form_data: OAuth2PasswordRequestForm = Depends()
) -> Any:
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    user = await auth_service.authenticate_user(
        db, email=form_data.username, password=form_data.password
    )
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    elif not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Inactive user"
        )
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": security.create_access_token(
            data={"sub": str(user.id)}, expires_delta=access_token_expires
        ),
        "token_type": "bearer"
    }

@router.post("/signup", response_model=UserSchema)
async def create_user_signup(
    *,
    db: AsyncSession = Depends(get_db),
    user_in: UserCreate,
) -> Any:
    """
    Create new user without the need to be logged in.
    """
    user = await auth_service.get_user_by_email(db, email=user_in.email)
    if user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="The user with this email already exists in the system",
        )
    user = await auth_service.create_user(db, user_in=user_in)
    return user

@router.post("/test-token", response_model=UserSchema)
async def test_token(current_user: User = Depends(get_current_user)) -> Any:
    """
    Test access token
    """
    return current_user

@router.post("/password-recovery/{email}")
async def recover_password(email: str, db: AsyncSession = Depends(get_db)) -> Any:
    """
    Password Recovery
    """
    user = await auth_service.get_user_by_email(db, email=email)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="The user with this email does not exist in the system.",
        )
    # Here you would typically send a password recovery email
    # For now, we'll just return a success message
    return {"msg": "Password recovery email sent"}

@router.post("/reset-password")
async def reset_password(
    token: str,
    new_password: str,
    db: AsyncSession = Depends(get_db),
) -> Any:
    """
    Reset password using token received in email
    """
    payload = security.verify_token(token)
    if not payload:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid token"
        )
    user_id: int = int(payload.get("sub"))
    query = select(User).filter(User.id == user_id)
    result = await db.execute(query)
    user = result.scalar_one_or_none()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    await auth_service.update_password(db, user=user, new_password=new_password)
    return {"msg": "Password updated successfully"} 