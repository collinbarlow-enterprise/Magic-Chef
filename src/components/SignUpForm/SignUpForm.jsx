import React, { Component } from 'react'
import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm({user, setUser}) {
  const [error, setError] = useState('');
 
  const navigate=useNavigate({user, setUser});
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  
  })
  const disable = credentials.password !== credentials.confirm;

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const formData = credentials;
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(credentials);
      setUser(user);
      navigate("/home");
    } catch (err) {
      console.log(err, 'error for user creation')
    }
  }

  function handleChange (evt) {
    setCredentials({...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }
  
  return (
    <div>
      <div className="form-container entry-form">
        <form autoComplete="off" id="form-signUp" onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" name="name" value={credentials.name} onChange={handleChange} required />
          <label>Email:</label>
          <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password:</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <label>Confirm:</label>
          <input type="password" name="confirm" value={credentials.confirm} onChange={handleChange} required />
        </form>
        <br/>
        <button className="col-2 login-button" type="submit" form="form-signUp" disabled={disable}>Create Profile</button>
      </div>
      <p className="error-message">&nbsp;{error}</p>
      </div>
    );
  }



