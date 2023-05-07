import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import UserLogOut from '../UserLogOut/UserLogOut';

export default function NavBar({user, updateUser}) {

  return (
    <nav>
      <Link to="/orders">All Recipes</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Pantry Page</Link>
      &nbsp; | &nbsp;
      <Link to="/home">HomePage Component</Link>
      &nbsp; | &nbsp;
      <Link to="/forum">Forum Component</Link>
      &nbsp; | &nbsp;
      <Link to="/">Main App Page/Component</Link>
      <h2>Welcome, {user.name}</h2>
      <UserLogOut user={user} setUser={updateUser} />
    </nav>
  )
}

