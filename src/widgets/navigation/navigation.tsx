import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/">Main Page</Link>
        <Link to="/about">About Us</Link>
      </nav>
    );
  }
}

export default Navigation;
