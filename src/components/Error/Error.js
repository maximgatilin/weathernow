import React, { Component } from 'react';

import styles from './Error.css';

class Error extends Component {
	render() {
			return (
	    	<div className={styles.container}>
	    		<h2 className={styles.text}>{this.props.children}</h2>
	    	</div>
    	)
  }
}

export default Error;