import React, { useState, useEffect, ChangeEvent, MouseEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
//import Cookies from 'universal-cookie';
import "./Login.css";

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();
    
    const handleLogin = async () => {
        navigate("/admin-dashboard");
    }
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

  return (
    <div className="form-container">
      <form className="signin-form" onSubmit={handleLogin}>
        <h2 className="form-title text-center">LOGIN</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <input
          className="form-input"
          type="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        />
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <button className="form-button" type="submit">Login</button>
        <div className="need-to-register">
          <p>Need to Register?</p>
          <button className="continue-button" onClick={() => navigate('/register')} type="button">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
