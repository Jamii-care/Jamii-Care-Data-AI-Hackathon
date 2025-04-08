from fastapi import APIRouter

from app.api.endpoints import auth, members, group, transactions

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(members.router, prefix="/members", tags=["members"]) 
api_router.include_router(group.router, prefix="/groups", tags=["groups"])
api_router.include_router(transactions.router, prefix="/transactions", tags=["transactions"])