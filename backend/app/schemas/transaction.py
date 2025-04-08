from pydantic import BaseModel
from datetime import datetime

class TransactionBase(BaseModel):
    type: str
    amount: float
    method: str
    status: str

class TransactionCreate(TransactionBase):
    pass

class TransactionResponse(TransactionBase):
    id: int
    date: datetime

    class Config:
        orm_mode = True