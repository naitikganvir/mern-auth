import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
         navigate('/login');
      } catch (err) {
         setError("User already exists or invalid input");
      }
   };

   return (
      <div className="auth-container">
         <h2>Sign Up</h2>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Sign Up</button>
         </form>
         {error && <p className="error-message">{error}</p>}
      </div>
   );
};

export default Signup;
