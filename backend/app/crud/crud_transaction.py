# backend/app/crud/crud_transaction.py
from typing import Any, Dict, Optional, Union, List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.crud.base import CRUDBase
from app.models.transaction import Transaction
from app.schemas.transaction import TransactionCreate, TransactionResponse

class CRUDTransaction(CRUDBase[Transaction, TransactionCreate, TransactionResponse]):
    async def create(self, db: AsyncSession, *, obj_in: TransactionCreate) -> Transaction:
        db_obj = Transaction(**obj_in.dict())
        db.add(db_obj)
        await db.commit()
        await db.refresh(db_obj)
        return db_obj

    async def get(self, db: AsyncSession, id: Any) -> Optional[Transaction]:
        result = await db.execute(select(Transaction).where(Transaction.id == id))
        return result.scalar_one_or_none()

    async def get_multi(self, db: AsyncSession, *, skip: int = 0, limit: int = 100) -> List[Transaction]:
        result = await db.execute(select(Transaction).offset(skip).limit(limit))
        return result.scalars().all()

    async def remove(self, db: AsyncSession, *, id: int) -> Transaction:
        db_obj = await self.get(db, id)
        if db_obj:
            await db.delete(db_obj)
            await db.commit()
            return db_obj
        return None

    async def get_transactions_by_user(self, db: AsyncSession, user_id: int) -> List[Transaction]:
        result = await db.execute(select(Transaction).filter(Transaction.user_id == user_id))
        return result.scalars().all()

# Create an instance of CRUDTransaction
transaction = CRUDTransaction(Transaction)