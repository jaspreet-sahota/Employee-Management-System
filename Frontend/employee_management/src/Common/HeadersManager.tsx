import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Headers.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [storeId, setStoreId] = useState('');
  const [managerId, setManagerId] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const extractedUsername = queryParams.get('username');
    const extractedStoreId = queryParams.get('storeId');
    const extractedManagerId = queryParams.get('managerId');
    
    console.log('Extracted values:', extractedUsername, extractedStoreId, extractedManagerId);
    
    setUsername(extractedUsername || '');
    setStoreId(extractedStoreId || '');
    setManagerId(extractedManagerId || '');
    
  }, [location]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to handle logout logic, replace with actual implementation
  const handleLogout = () => {
    // Perform logout operations such as clearing the auth token, user info, etc.
    navigate('/');
  };

  return (
    <div className="header">
      <NavLink to="/dashboard-manager" className="logo" onClick={scrollTop}>Employee Management System</NavLink>
      <div className="header-right">
        <NavLink
          to="/dashboard-manager"
          state={{ storeId: storeId, managerId: managerId }}
          className={({ isActive }) => (isActive ? 'active' : '')}
          end
        >
          Manager Dashboard
        </NavLink>
        <NavLink
          to="/view-store-schedule"
          state={{ storeId: storeId, managerId: managerId }}
          className={({ isActive }) => (isActive ? 'active' : '')}
          end
        >
          View Store Schedule
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/account-settings" end>
          Account Settings
        </NavLink>
        <a className="logout-link" onClick={handleLogout}>
          Logout
        </a>
      </div>
    </div>
  );
}

export default Header;
