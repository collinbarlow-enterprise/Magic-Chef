import React from 'react'
import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';


export default function NavBar({user}) {

  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-collapse">
      <div className="container">
        <div className="d-flex justify-content-start">Welcome, {user.name}</div>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="n_bar">
          <ul className="navbar-nav ml-auto justify-content-end">
            <li className="nav-item"><Link className="nav-link" to="/" onClick={handleLogOut}>Log Out</Link></li>
            <li className="nav-item active"><a className="nav-link" href="/home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/pantry/new">New Pantry Page</a></li> 
            <li className="nav-item"><a className="nav-link" href="/myrecipes">All Recipes</a></li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

