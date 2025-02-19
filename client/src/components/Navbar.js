import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
   const navigate = useNavigate();

   const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/login');
   };

   return (
      <nav className="navbar">
         <h1>MERN Auth</h1>
         <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <button onClick={handleLogout}>Logout</button>
         </div>
      </nav>
   );
};

export default Navbar;
