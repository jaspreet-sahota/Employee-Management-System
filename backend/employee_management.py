from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict

router = APIRouter()

# Dummy database to store employee data
employees_db = {}


class Employee(BaseModel):
    username: str
    password: str
    email: str
    phone_number: str


# Endpoint to create a new employee
@router.post("/employees/")
async def create_employee(employee: Employee):
    if employee.username in employees_db:
        raise HTTPException(status_code=400, detail="Username already exists")
    employees_db[employee.username] = employee.dict()
    return {"message": "Employee created successfully"}


# Endpoint to get a specific employee by username
@router.get("/employees/{username}")
async def get_employee(username: str):
    if username not in employees_db:
        raise HTTPException(status_code=404, detail="Employee not found")
    return employees_db[username]


# Endpoint to update an employee's information
@router.put("/employees/{username}")
async def update_employee(username: str, employee_update: Employee):
    if username not in employees_db:
        raise HTTPException(status_code=404, detail="Employee not found")
    employees_db[username].update(employee_update.dict())
    return {"message": "Employee updated successfully"}


# Endpoint to delete an employee
@router.delete("/employees/{username}")
async def delete_employee(username: str):
    if username not in employees_db:
        raise HTTPException(status_code=404, detail="Employee not found")
    del employees_db[username]
    return {"message": "Employee deleted successfully"}


# Endpoint to get all employees
@router.get("/employees/")
async def get_all_employees():
    return employees_db
