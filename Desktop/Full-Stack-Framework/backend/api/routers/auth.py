from datetime import datetime, timedelta, timezone
from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel
from jose import jwt
from dotenv import load_dotenv
import os
from api.models import User


from api.dependencies import db_dependency, bcrypt_context

load_dotenv()

router = APIRouter(
    prefix="/auth",
    tags=["auth"],
)

SECERT_KEY = os.getenv("SECERT_KEY")
ALGORITHM = os.getenv("AUTH_ALGORITHM")

class UserCreateResponse(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

def authenticate_user(db, username: str, password: str):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        return False
    if not bcrypt_context.verify(password, user.hashed_password):
        return False
    return user

def create_access_token(username: str, user_id: int, expires_delta: timedelta):
    encode = {"sub": username,"id": user_id}
    expire = datetime.now(timezone.utc) + expires_delta
    encode.update({"exp": expire})

    return jwt.encode(encode, SECERT_KEY, algorithm=ALGORITHM)

# Create a new user endpoint
@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_user(db:db_dependency, create_user_request: UserCreateResponse):
    create_user_model =User(
        username = create_user_request.username,
        hashed_password  = bcrypt_context.hash(create_user_request.password),
    )
    db.add(create_user_model)
    db.commit()

@router.post("/token", response_model=Token)
async def login_for_access_token(
    db: db_dependency,
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    token = create_access_token(
        username=user.username,
        user_id=user.id,
        expires_delta=timedelta(minutes=20),
    )
    return {"access_token": token, "token_type": "bearer"}