// components/navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {


  return (
    <nav>
      <NavLink exact to = {'/'} >Home </NavLink>
      <NavLink to       = {'/form'} > Form</NavLink>
      <NavLink to       = {'/delete/0'}> Delete</NavLink>
    </nav>
  );
}

export default Navbar;
