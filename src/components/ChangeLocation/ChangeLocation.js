import React, { Component } from 'react';

import styles from './ChangeLocation.css';

class ChangeLocation extends Component {
  render() {
    return (
    	<div className={styles.container}>
    		<button className={styles.button} onClick={this.props.clickHandler}>Change location</button>
    	</div>
    )
  }
}

export default ChangeLocation;