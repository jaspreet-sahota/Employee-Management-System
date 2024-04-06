import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import React, { FunctionComponent, useState } from "react";
import Header from '../Common/Headers'

const DelShifts: FunctionComponent = () => {
  const navigate = useNavigate();

  const [activeShifts, setActiveShifts] = useState<string[]>([]);

  const handleEmployeeClick = (shifts: string[]) => {
    setActiveShifts(shifts);
  };

  const handleActiveShiftChange = (index: number, action: string) => {
    if (action === "Edit") {
      // Handle edit action
      console.log(`Edit shift for index ${index}`);
    } else if (action === "Delete") {
      // Handle delete action
      console.log(`Delete shift for index ${index}`);
    }
  };

  return (
    <main className="bg-body-secondary min-vh-100">
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col pb-5 text-center" style={{ paddingTop: '40px' }}>
            <h1>Delete Employee Shifts</h1>
          </div>
        </div>
        <div className="row">
          <div className="col rounded mx-2 text-bg-light">
            <div className="row mb-5">
              <div className="col">
                <Form.Group controlId="formBasicUsername">
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col border rounded">
                <div className="table-row row border">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope='col'>Shift Day</th>
                        <th scope='col'>Start Time</th>
                        <th scope='col'>End Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col mt-5">
                <Form.Group controlId="formBasicShiftID">
                  <Form.Control type="text" placeholder="Shift ID" />
                  <Form.Label className="mx-1">Enter the Shift ID you wish to delete</Form.Label>
                </Form.Group>
              </div>
              <div className="col mt-5">
                <button type="button" className="btn btn-dark rounded">Delete Selected Shift</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DelShifts;
