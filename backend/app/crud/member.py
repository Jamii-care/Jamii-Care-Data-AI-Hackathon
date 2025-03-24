from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import joinedload

from app.crud.base import CRUDBase
from app.models.member import Member
from app.schemas.member import MemberCreate, MemberUpdate

class CRUDMember(CRUDBase[Member, MemberCreate, MemberUpdate]):
    async def get_by_user_id(self, db: AsyncSession, *, user_id: int) -> Optional[Member]:
        result = await db.execute(
            select(self.model).where(self.model.user_id == user_id)
        )
        return result.scalar_one_or_none()

    async def get_with_user(self, db: AsyncSession, *, id: int) -> Optional[Member]:
        result = await db.execute(
            select(self.model)
            .options(joinedload(self.model.user))
            .where(self.model.id == id)
        )
        return result.scalar_one_or_none()

member = CRUDMember(Member) 