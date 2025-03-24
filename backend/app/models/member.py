from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Enum
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
import enum

from app.db.base_class import Base
from app.models.user import User

class MembershipType(str, enum.Enum):
    REGULAR = "regular"
    PREMIUM = "premium"

class Member(Base):
    __tablename__ = "members"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True, nullable=False)
    phone_number = Column(String, unique=True, index=True)
    membership_type = Column(Enum(MembershipType), default=MembershipType.REGULAR)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationship
    user = relationship("User", back_populates="member")

User.member = relationship("Member", back_populates="user", uselist=False) 