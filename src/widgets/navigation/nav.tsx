import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </nav>
    );
  }
}

export default Navigation;
