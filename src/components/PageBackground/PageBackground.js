import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenMax } from 'gsap';

import styles from './PageBackground.css';

class PageBackground extends Component {
  render() {
    return (
      <span className={styles.pageBackground} ref={c => this.element = c}></span>
    )
  }

  componentWillReceiveProps(newProps) {
    if (this.props.background !== newProps.background) {
      let element = this.element;
      TweenMax.fromTo(element, 0.5, {css: {backgroundImage: this.props.background }}, {css: {backgroundImage: newProps.background } });
    }
  }
}

PageBackground.propTypes = {
	background: PropTypes.string
};

export default PageBackground;