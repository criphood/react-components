import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <header>
        <Link to="/">Main Page</Link>
        <Link to="/about">About Us</Link>
      </header>
    );
  }
}

export default Navigation;
