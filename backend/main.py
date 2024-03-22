from fastapi import FastAPI
from employee_management import router as employee_router
from shift_management import router as shift_router
from schedule_management import router as schedule_router
from payroll_management import router as payroll_router

app = FastAPI()

app.include_router(employee_router)
app.include_router(shift_router)
app.include_router(schedule_router)
app.include_router(payroll_router)
