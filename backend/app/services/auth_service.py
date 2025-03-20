from datetime import timedelta
from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from fastapi import HTTPException, status

from ..core import security
from ..core.config import settings
from ..models.user import User
from ..schemas.user import UserCreate, UserInDB

async def authenticate_user(db: AsyncSession, email: str, password: str) -> Optional[User]:
    query = select(User).filter(User.email == email)
    result = await db.execute(query)
    user = result.scalar_one_or_none()
    
    if not user:
        return None
    if not security.verify_password(password, user.hashed_password):
        return None
    return user

async def create_user(db: AsyncSession, user_in: UserCreate) -> User:
    # Check if user already exists
    query = select(User).filter(User.email == user_in.email)
    result = await db.execute(query)
    user = result.scalar_one_or_none()
    
    if user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Create new user
    hashed_password = security.get_password_hash(user_in.password)
    db_user = User(
        email=user_in.email,
        full_name=user_in.full_name,
        hashed_password=hashed_password,
        is_active=True,
        is_superuser=user_in.is_superuser
    )
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user

def create_access_token(user: User) -> str:
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return security.create_access_token(
        data={"sub": str(user.id)}, expires_delta=access_token_expires
    )

async def get_user_by_email(db: AsyncSession, email: str) -> Optional[User]:
    query = select(User).filter(User.email == email)
    result = await db.execute(query)
    return result.scalar_one_or_none()

async def update_password(db: AsyncSession, user: User, new_password: str) -> User:
    user.hashed_password = security.get_password_hash(new_password)
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user
