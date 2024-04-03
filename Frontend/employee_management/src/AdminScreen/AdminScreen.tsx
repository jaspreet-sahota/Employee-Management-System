import React, { FunctionComponent, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./AdminScreen.css";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  shifts: string[]; // Assuming shifts is an array of strings
}

const AdminScreen: FunctionComponent = () => {
  const location = useLocation();
  const { state } = location;
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    // Fetch employee information
    fetch('https://your-api-endpoint/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  return (
    <main>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
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
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col border rounded mx-1">
            <div className="table-row row border rounded m-1 overflow-y-scroll">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Employee #</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Add Shifts</th>
                    <th scope="col">Remove Shifts</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map(employee => (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.email}</td>
                      <td>
                        <a href={`/add-shift?username=${employee.username}`}>Add Shifts</a>
                      </td>
                      <td>
                        <a href={`/del-shift?username=${employee.username}&shifts=${JSON.stringify(employee.shifts)}`}>Remove Shifts</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminScreen;
