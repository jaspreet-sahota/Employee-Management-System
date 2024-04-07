import React, { FunctionComponent, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardScreen.css";
import Header from '../Common/HeadersEmployee';

interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  shifts: string[]; // Assuming shifts is an array of strings
}

const DashboardEmployee: FunctionComponent = () => {
  const location = useLocation();
  const storeId = location.state?.storeId; // Retrieve store ID from route state
  console.log("Store ID:", storeId);
  const employeeId = location.state?.employeeId; // Retrieve store ID from route state
  console.log("Employee ID", employeeId);
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    if (!storeId) {
      console.error("Store ID not provided");
      return;
    }

    if (!employeeId) {
      console.error("Employee ID not provided");
      return;
    }

    const fetchEmployees = async () => {
      try {
        const response = await fetch(`http://localhost:8000/employees/${storeId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, [storeId]); // Depend on storeId

  const handleEditShifts = (username: string) => {
    console.log(`Editing shifts for ${username}`);
    // Implement shift editing logic here
  };

  return (
    <main>
      <Header />
      <div className="container text-center">
        <div className="row">
          <div className="col border rounded mx-1">
            <div className="table-row row border rounded m-1 overflow-y-scroll">
              <h2>All Employees</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Employee Username</th>
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
                      <td>{employee.username}</td>
                      <td>{employee.first_name}</td>
                      <td>{employee.last_name}</td>
                      <td>{employee.email}</td>
                      <td>
                        <a href={`/add-shift?username=${employee.username}&storeId=${storeId}&employeeId=${employeeId}`}>Add Shifts</a>
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

export default DashboardEmployee;