import React, { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Alert } from "react-bootstrap";
import "./RegisterPage.css";

const Register: FunctionComponent = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [invalidInput, setInvalidInput] = useState<string | null>(null);
  const [storeID, setStoreID] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = async () => {

    // REGISTER API ENDPOINT REQUEST SECTION
    // -----------------------------------------------
    try {
      const userData = {
        storeID,
        firstName,
        lastName,
        username,
        email,
        password,
      };

      const response = await fetch("your-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const responseData = await response.json();
      console.log("Registration successful:", responseData);
      navigate("/");
    } catch (error: any) {
      setErrorMessage(error.message);
    }

    // ---------------------------------------------------------

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      setInvalidInput(email);
      return;
    }

    // Validate username format
    const usernameRegex = /^[a-zA-Z]+\.[a-zA-Z]+$/;
    if (!usernameRegex.test(username)) {
      setErrorMessage("Invalid username format. Use firstname.lastname");
      setInvalidInput(username);
      return;
    }

    // Validate password length and match with confirm password
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      setInvalidInput(password);
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setInvalidInput(confirmPassword);
      return;
    }

    // Registration logic
    navigate("/");
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
        {errorMessage && (
          <Alert variant="danger">
            {errorMessage} ({invalidInput})
          </Alert>
        )}
        <Form className="register-form">
          <Form.Group controlId="formBasicStoreID">
            <Form.Control
              type="text"
              placeholder="Store ID"
              value={storeID}
              onChange={(e) => setStoreID(e.target.value)}
            />
          </Form.Group>
          <div className="pt-3 mb-3 border-top border-bottom border-2 border-black">
            <div className="row">
              <div className="col">
                <Form.Group controlId="formBasicFN">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group controlId="formBasicLN">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Form.Group controlId="formBasicUsername">
                  <Form.Control
                    type="text"
                    placeholder="Username (firstname.lastname)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Email (firstname.lastname@gmail.com)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </div>
            </div>
          </div>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <div className="btn">
            <Button variant="primary" type="submit" onClick={handleRegister}>
              Signup
            </Button>
          </div>
        </Form>
      </div>
    </main>
  );
};

export default Register;
