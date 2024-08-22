import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('profile');
    navigate('/login');
  };

  return (
    <nav>
      <h1>School Management</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/register">Register</Link>
        {/* <Link to="/edit-user/:id">update</Link> */}
        {localStorage.getItem('profile') ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
