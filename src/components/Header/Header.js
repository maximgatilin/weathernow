import React, { Component } from 'react';
import styles from './Header.css';
import logo from './../../logo.svg';

class Header extends Component {
	render() {
    return (
      <header className={styles.block}>
        <img src={logo} alt="logo" width="200"/>
      </header>
    )
  }
}

export default Header;