import React, { FunctionComponent, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./AdminScreen.css";
import Header from '../Common/Headers'

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
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      username: 'john.doe',
      shifts: ['Morning Shift', 'Evening Shift'],
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      username: 'jane.doe',
      shifts: ['Morning Shift', 'Evening Shift'],
    },
  ]);

  useEffect(() => {
    // Fetch employee information
    fetch('https://your-api-endpoint/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  const handleEditShifts = (username: string) => {
    // Implement your edit shifts logic here, such as redirecting to a new page with the username
    console.log(`Editing shifts for ${username}`);
  };

  return (
    <main>
      <Header/>
      <div className="container text-center">
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
                    <th scope="col">Edit Shifts</th>
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
                        <a href={`/edit-shift?username=${employee.username}`}>Edit Shifts</a>
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