# backend/app/api/endpoints/group.py
from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app import crud, schemas
from app.core import deps
from app.models.user import User
from app.models.group import Group
from app.schemas.group import Group as GroupSchema

router = APIRouter()

@router.post("/", response_model=GroupSchema)
async def create_group(
    *,
    db: AsyncSession = Depends(deps.get_db),
    group_in: schemas.GroupCreate,
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    """
    Create a new group.
    """
    try:
        group = await crud.group.create(db=db, obj_in=group_in)
        return group
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

@router.get("/{group_id}", response_model=GroupSchema)
async def read_group(
    group_id: int,
    db: AsyncSession = Depends(deps.get_db),
) -> Any:
    """
    Get a group by ID.
    """
    group = await crud.group.get(db=db, id=group_id)
    if not group:
        raise HTTPException(status_code=404, detail="Group not found")
    return group

@router.get("/", response_model=List[GroupSchema])
async def read_groups(
    db: AsyncSession = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
) -> Any:
    """
    Retrieve groups.
    """
    groups = await crud.group.get_multi(db=db, skip=skip, limit=limit)
    return groups

@router.put("/{group_id}", response_model=GroupSchema)
async def update_group(
    *,
    db: AsyncSession = Depends(deps.get_db),
    group_id: int,
    group_in: schemas.GroupUpdate,
) -> Any:
    """
    Update a group by ID.
    """
    db_group = await crud.group.get(db=db, id=group_id)
    if not db_group:
        raise HTTPException(status_code=404, detail="Group not found")
    return await crud.group.update(db=db, db_obj=db_group, obj_in=group_in)

@router.delete("/{group_id}", response_model=GroupSchema)
async def delete_group(
    group_id: int,
    db: AsyncSession = Depends(deps.get_db),
) -> Any:
    """
    Delete a group by ID.
    """
    db_group = await crud.group.get(db=db, id=group_id)
    if not db_group:
        raise HTTPException(status_code=404, detail="Group not found")
    return await crud.group.remove(db=db, id=group_id)

@router.post("/{group_id}/members/{user_id}", response_model=schemas.GroupMember)
async def add_member(
    group_id: int,
    user_id: int,
    db: AsyncSession = Depends(deps.get_db),
) -> Any:
    """
    Add a member to a group.
    """
    return await crud.group.add_member(db=db, group_id=group_id, user_id=user_id)