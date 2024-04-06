import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import React, { FunctionComponent, useState } from "react";
import Header from '../Common/Headers'

const EditShifts: FunctionComponent = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');
  const [employeeUsername, setEmployeeUsername] = useState('');


  const handleDateSelection = (date: React.SetStateAction<string>) => {
    setSelectedDate(date);
  };

  const handleStartTimeSelection = (startTime: React.SetStateAction<string>) => {
      setSelectedStartTime(startTime);
  };

  const handleEndTimeSelection = (endTime: React.SetStateAction<string>) => {
      setSelectedEndTime(endTime);
  };

  const handleEnterBtn = () => {
    navigate("/")
  };

  return (
    <main className="bg-body-secondary min-vh-100">
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col pb-5 text-center" style={{ paddingTop: '40px' }}>
            <h1>Edit Employee Shifts</h1>
          </div>
        </div>
        <div className="row">
          <div className="col rounded"></div>

          <div className="col-10 rounded mx-2 text-bg-light">
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
            </div>
            <div className="row">

            <div className="row mb-5 mt-2">
              <div className="col">
                      <label className="form-label" htmlFor="dateField">Date</label>
                      <input type="text" className="form-control mb-2" id="dateField" placeholder="Selected Date" value={selectedDate} readOnly />

                      <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dateDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                              Select Date
                          </button>
                          <ul className="dropdown-menu overflow-y-auto" aria-labelledby="dateDropdown">
                              <li><a className="dropdown-item" href="#" onClick={() => handleDateSelection('Monday')}>Monday</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleDateSelection('Tuesday')}>Tuesday</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleDateSelection('Wednesday')}>Wednesday</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleDateSelection('Thursday')}>Thursday</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleDateSelection('Friday')}>Friday</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleDateSelection('Saturday')}>Saturday</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleDateSelection('Sunday')}>Sunday</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col">
                      <label className="form-label" htmlFor="startTimeField">Start Time</label>
                      <input type="text" className="form-control mb-2" id="startTimeField" placeholder="Selected Start Time" value={selectedStartTime} readOnly />

                      <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="startTimeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                              Select Start Time
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="startTimeDropdown">
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('9:00 AM')}>9:00 AM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('10:00 AM')}>10:00 AM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('11:00 AM')}>11:00 AM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('12:00 PM')}>12:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('13:00 PM')}>13:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('14:00 PM')}>14:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('15:00 PM')}>15:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('16:00 PM')}>16:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('17:00 PM')}>17:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('18:00 PM')}>18:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('19:00 PM')}>19:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('20:00 PM')}>20:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('21:00 PM')}>21:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleStartTimeSelection('22:00 PM')}>22:00 PM</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col">
                      <label className="form-label" htmlFor="endTimeField">End Time</label>
                      <input type="text" className="form-control mb-2" id="endTimeField" placeholder="Selected End Time" value={selectedEndTime} readOnly />

                      <div className="dropdown">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="endTimeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                              Select End Time
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="endTimeDropdown">
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('9:00 AM')}>9:00 AM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('10:00 AM')}>10:00 AM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('11:00 AM')}>11:00 AM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('12:00 PM')}>12:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('13:00 PM')}>13:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('14:00 PM')}>14:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('15:00 PM')}>15:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('16:00 PM')}>16:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('17:00 PM')}>17:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('18:00 PM')}>18:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('19:00 PM')}>19:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('20:00 PM')}>20:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('21:00 PM')}>21:00 PM</a></li>
                              <li><a className="dropdown-item" href="#" onClick={() => handleEndTimeSelection('22:00 PM')}>22:00 PM</a></li>
                          </ul>
                      </div>
                  </div>
            </div>
            <div>
              <div className="col mb-5">
                <button onClick={handleEnterBtn} type="button" className="btn btn-dark rounded">Edit Selected Shift</button>
              </div>
            </div>


            </div>
          </div>
          <div className="col rounded mx-2"></div>
        </div>
      </div>
    </main>
  );
};

export default EditShifts;
