import React from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from 'react';


export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage d-flex align-items-center">
      <div className="container">
      <div className="row ">
      <div className="col-12 d-flex justify-content-center">
        <h6 onClick={() => setShowLogin(!showLogin)} className="login-title" >{showLogin ? 'Need to Create a Profile?' : 'Already a User?'}</h6>
        </div>
        </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      
      
      </div>
    </main>
  );
}