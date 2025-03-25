# backend/app/schemas/group.py
from pydantic import BaseModel
from typing import Optional

class GroupBase(BaseModel):
    name: str
    description: Optional[str] = None

class GroupCreate(GroupBase):
    pass

class GroupUpdate(GroupBase):
    pass

class Group(GroupBase):
    id: int

    class Config:
        orm_mode = True

class GroupMember(BaseModel):
    group_id: int
    user_id: int

    class Config:
        orm_mode = True