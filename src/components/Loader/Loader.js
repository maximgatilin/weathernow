import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Loader.css';
import loaderImg from './../../images/loader.svg';

class Loader extends Component {
	render() {
		if (this.props.loading) {
			return (
	    	<div className={styles.overlay}>
	    		<img src={loaderImg} alt="loader"/>
	    	</div>
    	)
		}

		return null;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool
};

export default Loader;