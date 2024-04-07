import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Headers.css';

class Header extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className="header">
        <a href="/dashboard-employee" className="logo">Employee Management System</a>
        <div className="header-right">
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/dashboard-employee" end>
            Employee Dashboard
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/account-settings">
            Account Settings
          </NavLink>
          {/* Implement logout logic here */}
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">
            Logout
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;