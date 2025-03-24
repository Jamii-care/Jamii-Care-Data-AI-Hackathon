from typing import Any, Dict, Optional, Union, List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.crud.base import CRUDBase
from app.models.member import Member
from app.schemas.member import MemberCreate, MemberUpdate

class CRUDMember(CRUDBase[Member, MemberCreate, MemberUpdate]):
    async def get_by_user_id(
        self, db: AsyncSession, *, user_id: int
    ) -> Optional[Member]:
        result = await db.execute(
            select(Member).where(Member.user_id == user_id)
        )
        return result.scalar_one_or_none()

    async def create(
        self, db: AsyncSession, *, obj_in: MemberCreate
    ) -> Member:
        db_obj = Member(
            user_id=obj_in.user_id,
            phone_number=obj_in.phone_number,
        )
        db.add(db_obj)
        await db.commit()
        await db.refresh(db_obj)
        return db_obj

    async def update(
        self,
        db: AsyncSession,
        *,
        db_obj: Member,
        obj_in: Union[MemberUpdate, Dict[str, Any]]
    ) -> Member:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        
        return await super().update(db, db_obj=db_obj, obj_in=update_data)

member = CRUDMember(Member) 