from typing import Any, Dict, Optional, Union, List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.crud.base import CRUDBase
from app.models.group import Group
from app.models.group_member import GroupMember
from app.schemas.group import GroupCreate, GroupUpdate

class CRUDGroup(CRUDBase[Group, GroupCreate, GroupUpdate]):
    async def create(self, db: AsyncSession, *, obj_in: GroupCreate) -> Group:
        db_obj = Group(**obj_in.dict())
        db.add(db_obj)
        await db.commit()
        await db.refresh(db_obj)
        return db_obj

    async def add_member(self, db: AsyncSession, group_id: int, user_id: int) -> GroupMember:
        db_member = GroupMember(group_id=group_id, user_id=user_id)
        db.add(db_member)
        await db.commit()
        return db_member

    async def get(self, db: AsyncSession, id: Any) -> Optional[Group]:
        result = await db.execute(select(Group).where(Group.id == id))
        return result.scalar_one_or_none()

    async def get_multi(self, db: AsyncSession, *, skip: int = 0, limit: int = 100) -> List[Group]:
        result = await db.execute(select(Group).offset(skip).limit(limit))
        return result.scalars().all()

    async def update(self, db: AsyncSession, *, db_obj: Group, obj_in: Union[GroupUpdate, Dict[str, Any]]) -> Group:
        return await super().update(db, db_obj=db_obj, obj_in=obj_in)

    async def remove(self, db: AsyncSession, *, id: int) -> Group:
        return await super().remove(db, id=id)

group = CRUDGroup(Group)