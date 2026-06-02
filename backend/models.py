from sqlalchemy import Column, Integer, String
from database import Base


class PPDB(Base):
    __tablename__ = "ppdb"

    id = Column(Integer, primary_key=True, index=True)
    nama = Column(String(100))
    umur = Column(Integer)
    asal = Column(String(100))
    pesan = Column(String(255))