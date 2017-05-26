import React from 'react';
import styles from './Error.css';
import ErrorIcon from './../icons/ErrorIcon';

export default function Error(props) {
	return (
		<div className={styles.container}>
			<ErrorIcon />
			<h2 className={styles.text}>{props.children}</h2>
		</div>
	)
}