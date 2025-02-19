import React from 'react';
import Login from './components/Login';
import MainLayout from './components/MainLayout';
import Analytics from "./components/Analytics"
import DashboardAdmin from './components/DashboardAdmin';
import Learners1 from './components/Learners1';
import Learners2 from './components/Learners2';
import Reports from './components/Reports';
import Tests1Admin from './components/Tests1Admin';
import Tests2Admin from './components/Tests2Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  // const handleLogin = (username: string, password: string) => {
  //   console.log('Login attempt:', { username, password });
  //   // Add your login logic here
  // };

  return (
    <div className="App">
      <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<MainLayout />}>
        <Route path="tests1" element={<Tests1Admin />} />
        <Route path="dashboard" element={<DashboardAdmin />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reports" element={<Reports />} />
        <Route path="learners1" element={<Learners1 />} />
        <Route path="learners2" element={<Learners2 />} />
        <Route path="tests2" element={<Tests2Admin />} />
      </Route>
    </Routes>
  </Router>
      </div>
  );
};

export default App;