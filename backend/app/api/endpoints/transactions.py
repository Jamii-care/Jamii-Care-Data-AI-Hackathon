# backend/app/api/endpoints/transactions.py
from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app import crud, schemas
from app.core.deps import get_db
from app.core import deps
from app.models.user import User
from app.models.transaction import Transaction
from app.schemas.transaction import TransactionResponse, TransactionCreate

router = APIRouter()

@router.post("/transactions/", response_model=TransactionResponse)
async def create_transaction(transaction: TransactionCreate, db: AsyncSession = Depends(get_db)):
    return await crud_transaction.create_transaction(db=db, transaction_data=transaction.dict())

@router.get("/transactions/", response_model=List[TransactionResponse])
async def read_transactions(db: AsyncSession = Depends(get_db)):
    return await crud_transaction.get_all_transactions(db=db)