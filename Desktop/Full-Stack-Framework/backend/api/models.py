from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base


class User(Base):
    __tablename__ = "Users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)

    # One-to-one: User → UserProfile
    profile = relationship("UserProfile", back_populates="user", uselist=False)

    # One-to-many: User → UserAppDetails
    apps = relationship("UserAppDetails", back_populates="user")


class UserProfile(Base):#workouts
    __tablename__ = "UserProfile"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String)
    email = Column(String, unique=True, index=True)
    user_id = Column(Integer, ForeignKey("Users.id"))

    user = relationship("User", back_populates="profile")
