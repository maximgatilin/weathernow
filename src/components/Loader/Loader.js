import React from 'react';

import styles from './Loader.css';
import loaderImg from './../../images/loader.svg';

export default function Loader() {
	return (
		<div className={styles.overlay}>
			<img src={loaderImg} alt="loader"/>
		</div>
	)
}