import React, { FunctionComponent, useState} from "react";
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./ChooseRole.css";

const ChooseRole: FunctionComponent = () => {
    const navigate = useNavigate()
  
    const handleAdmin = () => {
      navigate("/admin-dashboard")
    };

    const handleEmployee = () => {
        navigate("/employee-dashboard")
      };
  
    return (
      <main className="main">
        <div className="coe892-project-employee-manage-wrapper">
            <h1 className="coe892-project-employee-container">
              <p className="employee-management-system">
                Employee Management System
              </p>
            </h1>
          </div>
        <div className="chooserole-container">
        <div className="btn">
            <Button variant="primary" type="submit" onClick={handleEmployee}>
              Employee
            </Button>
          </div>
          <div className="btn">
            <Button variant="primary" type="submit" onClick={handleAdmin}>
              Admin
            </Button>
          </div>
        </div>
      </main>
    );
  };
  
export default ChooseRole;
  