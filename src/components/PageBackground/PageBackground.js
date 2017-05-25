import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenMax } from 'gsap';

import styles from './PageBackground.css';

class PageBackground extends Component {
	componentWillReceiveProps(newProps) {
		if (this.props.background !== newProps.background) {
			let element = this.element;
			TweenMax.fromTo(element, 0.5, {css: {backgroundImage: this.props.background }}, {css: {backgroundImage: newProps.background } });
		}
	}

	render() {
		return (
			<span className={styles.pageBackground} ref={c => this.element = c}></span>
		)
	}
}

PageBackground.propTypes = {
	background: PropTypes.string
};

export default PageBackground;