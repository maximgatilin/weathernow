import React, { Component } from 'react';

import styles from './Loader.css';
import loaderImg from './../../images/loader.svg';

class Loader extends Component {
	render() {
			return (
				<div className={styles.overlay}>
					<img src={loaderImg} alt="loader"/>
				</div>
			)
	}
}

export default Loader;