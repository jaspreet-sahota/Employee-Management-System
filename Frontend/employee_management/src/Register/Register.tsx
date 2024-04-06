import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [storeID, setStoreID] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const validateForm = (): boolean => {
    let isValid = true;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return false;
    }

    // Validate username format
    const usernameRegex = /^[a-zA-Z]+\.[a-zA-Z]+$/;
    if (!usernameRegex.test(username)) {
      setErrorMessage("Invalid username format. Use firstname.lastname");
      return false;
    }

    // Validate password length and match with confirm password
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return false;
    }

    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const userData = {
      storeID,
      firstName,
      lastName,
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8000/api/signup", {
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
      navigate("/admin-dashboard");
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to register. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <div className="register-form">
        <h2 className="form-title text-center">REGISTER</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="text"
            placeholder="Store ID"
            value={storeID}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setStoreID(e.target.value)}
          />
          <input
            className="form-input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Username (firstname.lastname)"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
          <input
            className="form-input"
            type="email"
            placeholder="Email (firstname.lastname@gmail.com)"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
          />
          <button className="form-button" type="submit">Register</button>
        </form>
        <div className="already-registered">
          <p>Already Registered?</p>
          <button className="continue-button" onClick={() => navigate('/Login')}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
