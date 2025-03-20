from pydantic_settings import BaseSettings
from typing import Optional, List
import os
from dotenv import load_dotenv
import json

load_dotenv()

class Settings(BaseSettings):
    # API settings
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "JamiiCare"
    VERSION: str = "1.0.0"
    
    # Database settings
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql+asyncpg://jamii_care:jamii_care@localhost:5432/jamii_care")
    
    # JWT settings
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-secret-key-here")
    JWT_SECRET_KEY: str = os.getenv("JWT_SECRET_KEY", "fwhR-Q57oKRIlF0WA3gVMapG7NDHBh8z_nMqzvcotdw")
    JWT_ALGORITHM: str = os.getenv("JWT_ALGORITHM", "HS256")
    JWT_EXPIRE_MINUTES: int = int(os.getenv("JWT_EXPIRE_MINUTES", "30"))
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # CORS settings
    BACKEND_CORS_ORIGINS: List[str] = json.loads(
        os.getenv("BACKEND_CORS_ORIGINS", '["http://localhost:3000","http://localhost:8000"]')
    )
    
    # Microsoft Fabric settings
    MICROSOFT_FABRIC_ENDPOINT: Optional[str] = os.getenv("MICROSOFT_FABRIC_ENDPOINT")
    MICROSOFT_FABRIC_KEY: Optional[str] = os.getenv("MICROSOFT_FABRIC_KEY")
    
    # Security settings
    VERIFY_EMAIL: bool = False
    
    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings() 