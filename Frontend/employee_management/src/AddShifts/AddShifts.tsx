import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useLocation } from "react-router-dom";
import React, { FunctionComponent, useState } from "react";

const AddShifts: FunctionComponent = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedStartTime, setSelectedStartTime] = useState('');
    const [selectedEndTime, setSelectedEndTime] = useState('');

    const handleDateSelection = (date: React.SetStateAction<string>) => {
        setSelectedDate(date);
    };

    const handleStartTimeSelection = (startTime: React.SetStateAction<string>) => {
        setSelectedStartTime(startTime);
    };

    const handleEndTimeSelection = (endTime: React.SetStateAction<string>) => {
        setSelectedEndTime(endTime);
    };



    return (
        <main className="main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col pb-5">
                        <h1>Employee Management System</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col rounded mx-2"></div>

                    <div className="col-8 rounded mx-2 text-bg-light">
                        <h3 className="text-start py-2">Add Employee Shifts</h3>
                        <div className="mb-2 form-control text-start">
                            <label className="px-1 py-1" htmlFor="username">Employee Username</label>
                            <input type="text" className="form-control mb-3" id="username" placeholder="Enter Employee Username" />

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
                        </div>
                    </div>

                    <div className="col rounded mx-2"></div>
                </div>
            </div>
        </main>
    );
};

export default AddShifts;