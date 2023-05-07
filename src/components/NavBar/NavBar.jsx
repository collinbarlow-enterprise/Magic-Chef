import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import UserLogOut from '../UserLogOut/UserLogOut';

export default function NavBar({user, updateUser}) {

  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      <h2>Welcome, {user.name}</h2>
      <UserLogOut user={user} setUser={updateUser} />
    </nav>
  )
}

