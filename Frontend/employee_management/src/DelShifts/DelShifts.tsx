import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useNavigate } from "react-router-dom";
import React, { FunctionComponent, useState } from "react";

const DelShifts: FunctionComponent = () => {
    const navigate = useNavigate();

    const employees = [
        { id: 1, name: 'John Doe', shifts: ['9:00am --> 5:00pm', 'Afternoon'] },
        { id: 2, name: 'Jane Smith', shifts: ['Evening', 'Night'] },
        // Add more employees with their shifts as needed
    ];

    const [activeShifts, setActiveShifts] = useState<string[]>([]);

    const handleEmployeeClick = (shifts: string[]) => {
        setActiveShifts(shifts);
    };

    const handleActiveShiftChange = (index: number, action: string) => {
        if (action === 'Edit') {
            // Handle edit action
            console.log(`Edit shift for index ${index}`);
        } else if (action === 'Delete') {
            // Handle delete action
            console.log(`Delete shift for index ${index}`);
        }
    };

    return (
        <main className="bg-body-secondary min-vh-100">

            <div className="container text">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom border-2 border-black">
                    <a className="d-flex align-items-center mb-3 mb-0 me-md-auto text-dark text-decoration-none" href="/">
                        <span className="fs-4">Employee Management System</span>
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-nav-item">
                            <a className="nav-link" href="/">Logout</a>
                        </li>
                    </ul>
                </header>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col pb-5 text-center">
                        <h1>Employee Management System</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col rounded mx-2"></div>

                    <div className="col-8 rounded mx-2 text-bg-light">
                        <h3 className="text-start py-2">Delete Employee Shifts</h3>
                        <div className="row">
                            <div className="col-4">
                                <h5>Current Employees</h5>
                                <ul className="list-group">
                                    {employees.map((employee) => (
                                        <li key={employee.id} className="list-group-item" onClick={() => handleEmployeeClick(employee.shifts)}>
                                            {employee.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-8">
                                <h5>Active Shifts</h5>
                                <ul className="list-group pb-5">
                                    {activeShifts.map((shift, index) => (
                                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                            {shift}
                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle px-3" type="button" id={`dropdownMenuButton${index}`} data-bs-toggle="dropdown" aria-expanded="false">
                                                    Actions
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton${index}`}>
                                                    <li><button className="dropdown-item" onClick={() => handleActiveShiftChange(index, 'Edit')}>Edit</button></li>
                                                    <li><button className="dropdown-item" onClick={() => handleActiveShiftChange(index, 'Delete')}>Delete</button></li>
                                                </ul>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col rounded mx-2"></div>
                </div>
            </div>
        </main>
    );
};

export default DelShifts;
