from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app import crud, schemas
from app.core import deps
from app.models.user import User
from app.models.member import Member, MembershipType
from app.schemas.member import Member as MemberSchema

router = APIRouter()

@router.post("/", response_model=MemberSchema)
async def create_member(
    *,
    db: AsyncSession = Depends(deps.get_db),
    member_in: schemas.MemberCreate,
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    """
    Create new member.
    """
    try:
        # Check if member already exists for user
        member = await crud.member.get_by_user_id(db, user_id=member_in.user_id)
        if member:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Member already exists for this user.",
            )
        member = await crud.member.create(db, obj_in=member_in)
        return member
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )

@router.get("/me", response_model=schemas.Member)
async def read_member_me(
    db: AsyncSession = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    """
    Get current member.
    """
    member = await crud.member.get_by_user_id(db, user_id=current_user.id)
    if not member:
        raise HTTPException(status_code=404, detail="Member not found")
    return member

@router.put("/me", response_model=schemas.Member)
async def update_member_me(
    *,
    db: AsyncSession = Depends(deps.get_db),
    member_in: schemas.MemberUpdate,
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    """
    Update current member.
    """
    member = await crud.member.get_by_user_id(db, user_id=current_user.id)
    if not member:
        raise HTTPException(status_code=404, detail="Member not found")
    member = await crud.member.update(db, db_obj=member, obj_in=member_in)
    return member

# Admin endpoints
@router.get("/", response_model=List[schemas.Member])
async def read_members(
    db: AsyncSession = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Retrieve members. For admin use.
    """
    members = await crud.member.get_multi(db, skip=skip, limit=limit)
    return members

@router.get("/{member_id}", response_model=schemas.Member)
async def read_member(
    member_id: int,
    db: AsyncSession = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Get member by ID. For admin use.
    """
    member = await crud.member.get(db, id=member_id)
    if not member:
        raise HTTPException(status_code=404, detail="Member not found")
    return member

@router.put("/{member_id}", response_model=schemas.Member)
async def update_member(
    *,
    db: AsyncSession = Depends(deps.get_db),
    member_id: int,
    member_in: schemas.MemberUpdate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Update a member. For admin use.
    """
    member = await crud.member.get(db, id=member_id)
    if not member:
        raise HTTPException(status_code=404, detail="Member not found")
    member = await crud.member.update(db, db_obj=member, obj_in=member_in)
    return member 