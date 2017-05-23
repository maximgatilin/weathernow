import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenLite, Elastic } from 'gsap';

import styles from './ChangeLocation.css';
import LocationIcon from './../icons/LocationIcon';

class ChangeLocation extends Component {
  render() {
    return (
    	<div className={styles.container} ref={c => this.container = c}>
    		<LocationIcon />
    		<button className={styles.button} onClick={this.props.clickHandler}>Change location</button>
    	</div>
    )
  }

  componentWillAppear() {
  	const el = this.container;
    TweenLite.fromTo(el, 1.3, {y: 30, opacity: 0}, {y: 0, opacity: 1, ease: Elastic.easeOut.config(1.2, 0.75), delay: 0.1 });
  }
}

ChangeLocation.propTypes = {
	clickHandler: PropTypes.func
};

export default ChangeLocation;