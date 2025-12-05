from pydantic import BaseModel
from typing import Optional
from fastapi import APIRouter, status

from api.models import UserProfile
from api.dependencies import db_dependency, user_dependency

router = APIRouter(
    prefix='/UserProfile',
    tags=['UserProfile']
)

class UserProfileBase(BaseModel):
    name: str
    description: Optional[str] = None

class UserProfileCreate(UserProfileBase):
    pass

@router.get('/')
def get_UserProfile(db: db_dependency, user: user_dependency, UserProfile_id: int):
    return db.query(UserProfile).filter(UserProfile.id == UserProfile_id).first()


@router.get('/UserProfile')
def get_UserProfile(db: db_dependency, user: user_dependency):
    return db.query(UserProfile).all()


@router.post('/', status_code=status.HTTP_201_CREATED)
def create_UserProfile(db: db_dependency, user: user_dependency, UserProfile: UserProfileCreate):
    db_UserProfile = UserProfile(**UserProfile.model_dump(), user_id=user.get('id'))
    db.add(db_UserProfile)
    db.commit()
    db.refresh(db_UserProfile)
    return db_UserProfile

@router.delete("/")
def delete_UserProfile(db: db_dependency, user: user_dependency, UserProfile_id: int):
    db_UserProfile = db.query(UserProfile).filter(UserProfile.id == UserProfile_id).first()
    if db_UserProfile:
        db.delete(db_UserProfile)
        db.commit()
    return db_UserProfile
