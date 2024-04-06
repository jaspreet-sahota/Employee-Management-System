import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/login'); // Adjust the route as needed
  };

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/register-user'); // Adjust the route as needed
  };

  return (
    <div className="form-container">
      <div className="landing-form">
        <div></div>
        <button className="form-button" onClick={handleLogin}>Login</button>
        <button className="form-button" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Landing;