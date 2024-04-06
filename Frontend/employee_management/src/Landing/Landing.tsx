import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleEmployeeLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/login-employee'); // Adjust the route as needed
  };

  const handleEmployeeRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/register-employee'); // Adjust the route as needed
  };

  const handleManagerLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/login-manager'); // Adjust the route as needed
  };

  const handleManagerRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/register-manager'); // Adjust the route as needed
  };

  return (
    <div className="form-container">
      <div className="landing-form">
        <div></div>
        <button className="form-button" onClick={handleEmployeeLogin}>Employee Login</button>
        <button className="form-button" onClick={handleEmployeeRegister}>Employee Register</button>
        <button className="form-button" onClick={handleManagerLogin}>Manager Login</button>
        <button className="form-button" onClick={handleManagerRegister}>Manager Register</button>
      </div>
    </div>
  );
}

export default Landing;