from typing import Optional
from pydantic import BaseModel
from datetime import datetime
from ..models.member import MembershipType

# Shared properties
class MemberBase(BaseModel):
    phone_number: Optional[str] = None
    membership_type: Optional[MembershipType] = MembershipType.REGULAR
    profile_image_url: Optional[str] = None

# Properties to receive via API on creation
class MemberCreate(MemberBase):
    user_id: int
    phone_number: str

# Properties to receive via API on update
class MemberUpdate(MemberBase):
    phone_number: Optional[str] = None
    membership_type: Optional[MembershipType] = None
    profile_image_url: Optional[str] = None

# Properties shared by models stored in DB
class MemberInDBBase(MemberBase):
    id: Optional[int] = None
    user_id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# Properties to return to client
class Member(MemberInDBBase):
    pass

# Properties stored in DB
class MemberInDB(MemberInDBBase):
    pass 