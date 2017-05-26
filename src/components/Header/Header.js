import React from 'react';
import styles from './Header.css';
import logo from './../../images/logo.svg';

export default function Header() {
	return (
			<header className={styles.block}>
				<img src={logo} alt="logo" width="200"/>
			</header>
		)
}