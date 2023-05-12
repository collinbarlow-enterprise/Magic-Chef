import React from 'react'
import { Link } from 'react-router-dom';
import UserLogOut from '../UserLogOut/UserLogOut';

export default function NavBar({user, updateUser}) {

  return (
    <nav>
      <Link to="/myrecipes">All Recipes</Link>
      &nbsp; | &nbsp;
      <Link to="/pantry/new">New Pantry Page</Link>
      &nbsp; | &nbsp;
      <Link to="/home">HomePage Component</Link>
      &nbsp; | &nbsp;
      {/* <Link to="/forum">Forum Component</Link> */}
      {/* &nbsp; | &nbsp; */}
      {/* <Link to="/">Main App Page/Component</Link> */}
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <span><UserLogOut user={user} setUser={updateUser} /></span>
      
    </nav>
  )
}

