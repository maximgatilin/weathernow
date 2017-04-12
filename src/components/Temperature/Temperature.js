import React, { Component } from 'react';

import styles from './Temperature.css';

class Temperature extends Component {
  render() {
    return (
    	<div className={styles.value}>{this.props.value}</div>
    )
  }
}

export default Temperature;