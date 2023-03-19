import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <Link to="/">Main Page</Link>
        <Link to="/about">About Us</Link>
      </nav>
    );
  }
}

export default Navigation;
