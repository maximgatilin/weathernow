import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Temperature.css';

class Temperature extends Component {
  render() {
    return (
    	<div className={styles.value}>{this.props.value}</div>
    )
  }
}

Temperature.propTypes = {
	value: PropTypes.number.isRequired
};

export default Temperature;