import React, { FunctionComponent, useState} from "react";
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./RegisterPage.css";

const Register: FunctionComponent = () => {
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate("/")
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
      <div className="register-container">
        <h1>Register</h1>
        <Form className="register-form">
          <Form.Group controlId="formBasicUsername">
            <Form.Control type="text" placeholder="Email"  />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Create Password" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
        </Form>
        <div className="btn">
          <Button variant="primary" type="submit" onClick={handleRegister}>
            Signup
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Register;
