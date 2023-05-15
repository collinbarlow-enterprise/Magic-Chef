import React, { Component } from 'react'
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {

  // state is always an object with a property for each "piece" of state
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      const formData = {...this.state}
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData)
      this.props.setUser(user)
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again'})
    }
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value, error: '' })
  }
  
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container entry-form">
          <form autoComplete="off" id="form-signUp" onSubmit={this.handleSubmit}>
            <label>Username:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email:</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm:</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />

          </form>
          <br/>
          <button className="col-2 login-button" type="submit" form="form-signUp" disabled={disable}>Create Profile</button>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }

}

