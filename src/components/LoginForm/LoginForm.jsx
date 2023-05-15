import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ user, setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
    const navigate=useNavigate();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/home')
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container text-center entry-form">
        <form autoComplete="off" id="form-login" onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password:</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />

        </form>
        <br/>
        <button className="col-2 login-button" type="submit" form="form-login">LOG IN</button>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}