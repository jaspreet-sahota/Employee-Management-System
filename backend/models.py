from database import Base
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship

class Store(Base):
    __tablename__ = 'stores'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    location = Column(String)

    # Relationships
    managers = relationship("Manager", back_populates="store")
    employees = relationship("Employee", back_populates="store")
    shifts = relationship("EmployeeShifts", back_populates="store")

class Manager(Base):
    __tablename__ = 'managers'
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    username = Column(String, unique=True)  # Ensure uniqueness
    email = Column(String, unique=True)  # Ensure uniqueness
    password = Column(String)
    store_id = Column(Integer, ForeignKey('stores.id'))
    store = relationship("Store", back_populates="managers")

class Employee(Base):
    __tablename__ = 'employees'
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    username = Column(String, unique=True)  # Ensure uniqueness
    email = Column(String, unique=True)  # Ensure uniqueness
    password = Column(String)
    store_id = Column(Integer, ForeignKey('stores.id'))
    store = relationship("Store", back_populates="employees")
    shifts = relationship("EmployeeShifts", back_populates="employee")

class EmployeeShifts(Base):
    __tablename__ = 'employee_shifts'
    id = Column(Integer, primary_key=True, index=True)
    shift_date = Column(DateTime)
    start_time = Column(DateTime)
    end_time = Column(DateTime)

    # Foreign Keys
    employee_id = Column(Integer, ForeignKey('employees.id'))
    store_id = Column(Integer, ForeignKey('stores.id'))

    # Relationships
    employee = relationship("Employee", back_populates="shifts")
    store = relationship("Store", back_populates="shifts")
