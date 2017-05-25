import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenLite, Elastic } from 'gsap';

import styles from './SimpleButton.css';

class SimpleButton extends Component {
  render() {
    return (
    	<div className={styles.container} ref={c => this.container = c}>
    		<button className={styles.button} onClick={this.props.clickHandler}>{this.props.children}</button>
    	</div>
    )
  }

  componentDidMount() {
    if (this.props.animated) {
      this.animate();
    }
  }

  animate() {
    const el = this.container;
    const delay = this.props.animationDelay || 0;

    switch (this.props.animationType) {
      case 'toTop':
        TweenLite.fromTo(el, 1.3, {y: 30, opacity: 0}, {y: 0, opacity: 1, ease: Elastic.easeOut.config(1.2, 0.75), delay: delay });
        break;
      default:
        return;  
    }
  }
}

SimpleButton.propTypes = {
	clickHandler: PropTypes.func,
  animated: PropTypes.bool,
  animationType: PropTypes.string,
  animationDelay: PropTypes.number,
  animateWhenMounted: PropTypes.bool
};

export default SimpleButton;