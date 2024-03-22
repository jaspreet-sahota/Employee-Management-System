from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict

router = APIRouter()

# Dummy database to store payroll data
payroll_db = {}


class Payroll(BaseModel):
    employee_id: str
    hours_worked: float
    pay_rate: float
    # Other payroll-related fields


# Endpoint to create a new payroll entry
@router.post("/payroll/")
async def create_payroll_entry(payroll: Payroll):
    payroll_db[payroll.employee_id] = payroll.dict()
    return {"message": "Payroll entry created successfully"}


# Endpoint to get payroll information for a specific employee
@router.get("/payroll/{employee_id}")
async def get_payroll_info(employee_id: str):
    if employee_id not in payroll_db:
        raise HTTPException(status_code=404, detail="Payroll information not found")
    return payroll_db[employee_id]
