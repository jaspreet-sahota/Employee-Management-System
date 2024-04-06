import React, { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./MainMenu.css";

const MainMenu: FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // LOGIN PAGE API ENDPOINT
  // -----------------------------------------------------------
  // const handleLogin = async () => {
  //   try {
  //     const userData = { username, password };
  //     const response = await fetch("your-api-login-endpoint", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userData),
  //     });
  //
  //     if (!response.ok) {
  //       throw new Error("Failed to login");
  //     }
  //
  //     const responseData = await response.json();
  //     console.log("Login successful:", responseData);
  //     navigate("/admin-dashboard");
  //   } catch (error: any) {
  //     setErrorMessage(error.message);
  //   }
  // };
  // --------------------------------------------------------------

  const handleLogin = () => {
    navigate('/admin-dashboard', { state: { username, password } });
  };

  const handleRegister = () => {
    navigate("/register-user");
  };

  return (
    <div className="desktop">
      <main className="dashboard-login">
        <div className="login-box">
          <div className="coe892-project-employee-manage-wrapper">
            <h1 className="coe892-project-employee-container">
              <p className="employee-management-system">
                Employee Management System
              </p>
            </h1>
          </div>
          <div className="dashboard-login-inner">
            <div className="pt-3 pb-1 mb-3 border-bottom border-top border-black border-2">
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
          <div className="design-members-master">
            <b className="design-members">
              Designed By: Colin Page, Jaspreet Sahota, Chris Paul Kumaran, Ahmed Ramadan
            </b>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainMenu;