// NavBar.tsx
import React from 'react';
import '../css/NavBar.css';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {

  const navigate = useNavigate();

  const handleToDashboard = () => {
    // Perform login logic here
    navigate('/main/dashboard');
  };

  const handleToTests = () => {
    // Perform login logic here
    navigate('/main/tests1');
  };

  const handleToLearners = () => {
    // Perform login logic here
    navigate('/main/learners1');
  };

  const handleToReports = () => {
    // Perform login logic here
    navigate('/main/reports');
  };

  const handleToAnalytics = () => {
    // Perform login logic here
    navigate('/main/analytics');
  };

  return (
    <div className="navbar">
      <button className="nav-button" onClick={handleToDashboard}>Dashboard </button>
      <button className="nav-button" onClick={handleToTests}>Tests</button>
      <button className="nav-button" onClick={handleToLearners}>Learners</button>
      <button className="nav-button" onClick={handleToReports}>Reports </button>
      <button className="nav-button" onClick={handleToAnalytics}>Analytics</button>
      <button className="nav-button">Settings</button>
      </div>
  );
};

export default NavBar;
