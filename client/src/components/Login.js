import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
         localStorage.setItem('token', res.data.token);
         navigate('/');
      } catch (err) {
         setError("Invalid email or password");
      }
   };

   return (
      <div className="auth-container">
         <h2>Login</h2>
         <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
         </form>
         {error && <p className="error-message">{error}</p>}
      </div>
   );
};

export default Login;
