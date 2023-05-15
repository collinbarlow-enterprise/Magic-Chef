import React from 'react'
import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';


export default function NavBar({user, updateUser}) {

  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-collapse">
      <div className="container">
        <div>Welcome, {user.name}</div>
        
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="n_bar">
                    <ul class="navbar-nav">
                        <li class="nav-item active"><a class="nav-link" href="/home">Home</a></li> 
                        <li class="nav-item"><a class="nav-link" href="/myrecipes">All Recipes</a></li>
                        <li class="nav-item"><a class="nav-link" href="/pantry/new">New Pantry Page</a></li>
                        {/* <li class="nav-item button-logout" ><button onClick={handleLogOut}>Log Out</button></li> */}
                        <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLogOut}>
                Log Out
              </Link>
            </li>
                    </ul>
                </div>
      </div>
    </nav>
  )
}

