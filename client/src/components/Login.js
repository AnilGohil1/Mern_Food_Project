// src/components/Login.js
import React, { useState } from 'react';
import { login } from '../api';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  //const [token, setToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      //setToken(res.data.token);
      setMessage("Login successful");
    } catch {
      setMessage("Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" onChange={handleChange} value={formData.email} placeholder="Email" />
        <input name="password" type="password" onChange={handleChange} value={formData.password} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
      
    </div>
  );
};

export default Login;
