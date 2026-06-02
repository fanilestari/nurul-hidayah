from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session

from database import SessionLocal, engine
from models import PPDB
from database import Base

# membuat tabel otomatis
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ======================
# DATABASE SESSION
# ======================

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ======================
# SCHEMA
# ======================

class PPDBCreate(BaseModel):
    nama: str
    umur: int
    asal: str
    pesan: str


class Login(BaseModel):
    username: str
    password: str


# ======================
# LOGIN
# ======================

@app.post("/login")
def login(data: Login):
    if data.username == "admin" and data.password == "admin123":
        return {
            "success": True,
            "token": "admin-token"
        }

    return {
        "success": False
    }


# ======================
# CREATE
# ======================

@app.post("/ppdb")
def create_ppdb(
    data: PPDBCreate,
    db: Session = Depends(get_db)
):

    siswa = PPDB(
        nama=data.nama,
        umur=data.umur,
        asal=data.asal,
        pesan=data.pesan
    )

    db.add(siswa)
    db.commit()
    db.refresh(siswa)

    return siswa


# ======================
# READ
# ======================

@app.get("/ppdb")
def get_ppdb(
    db: Session = Depends(get_db)
):
    return db.query(PPDB).all()


# ======================
# UPDATE
# ======================

@app.put("/ppdb/{id}")
def update_ppdb(
    id: int,
    data: PPDBCreate,
    db: Session = Depends(get_db)
):

    siswa = db.query(PPDB).filter(PPDB.id == id).first()

    if not siswa:
        return {
            "message": "not found"
        }

    siswa.nama = data.nama
    siswa.umur = data.umur
    siswa.asal = data.asal
    siswa.pesan = data.pesan

    db.commit()

    return {
        "message": "updated"
    }


# ======================
# DELETE
# ======================

@app.delete("/ppdb/{id}")
def delete_ppdb(
    id: int,
    db: Session = Depends(get_db)
):

    siswa = db.query(PPDB).filter(PPDB.id == id).first()

    if not siswa:
        return {
            "message": "not found"
        }

    db.delete(siswa)
    db.commit()

    return {
        "message": "deleted"
    }