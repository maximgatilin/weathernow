import React from 'react';
import styles from './Footer.css';
import darkSkyImg from './../../images/darksky.png';

export default function Footer() {
	return (
			<footer className={styles.block}>
				<a href="https://darksky.net/poweredby/" target="_blank">
					<img src={darkSkyImg} alt="logo" width="200"/>
				</a>
			</footer>
		)
}