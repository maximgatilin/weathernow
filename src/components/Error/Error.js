import React, { Component } from 'react';

import styles from './Error.css';
import ErrorIcon from './../icons/ErrorIcon';

class Error extends Component {
	render() {
			return (
	    	<div className={styles.container}>
	    		<ErrorIcon />
	    		<h2 className={styles.text}>{this.props.children}</h2>
	    	</div>
    	)
  }
}

export default Error;