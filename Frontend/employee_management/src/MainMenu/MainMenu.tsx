import React, { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./MainMenu.css";

const MainMenu: FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Add login logic here using username and password
    alert('Username: ' + username + '\nPassword: ' + password)
  };

  const handleRegister = () => {
    navigate("/register-user")
  };

  return (
    <div className="desktop">
      <main className="dashboard-login">
        <div className="coe892-project-employee-manage-wrapper">
          <h1 className="coe892-project-employee-container">
            <p className="coe892-project">COE892 Project</p>
            <p className="employee-management-system">
              Employee Management System
            </p>
          </h1>
        </div>
        <div className="dashboard-login-inner">
          <div>
            <Form className="username">
              <Form.Control
                type="text"
                placeholder="USERNAME"
                value={username}
                onChange={handleUsernameChange}
              />
            </Form>
            <Form className="password">
              <Form.Control
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form>
          </div>
        </div>
        <div className="login-register">
          <div>
            <Button
              className="login-button"
              variant="primary"
              size="lg"
              onClick={handleLogin}
            >
              LOGIN
            </Button>
            <Button
              className="register-button"
              variant="primary"
              size="lg"
              onClick={handleRegister}
            >
              REGISTER
            </Button>
          </div>
        </div>

        <div className="design-members-master">
          <b className="design-members">
            Designed By: Colin Page, Jaspreet Sahota, Chris Paul Kumaran, Ahmed
            Ramadan
          </b>
        </div>
      </main>
    </div>
  );
};

export default MainMenu;
