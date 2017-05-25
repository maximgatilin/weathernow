import React, { Component } from 'react';
import { TweenLite, Elastic } from 'gsap';

import styles from './City.css';

class City extends Component {
	componentWillAppear() {
		const el = this.el;
		TweenLite.fromTo(el, 1.3, {y: 30, opacity: 0}, {y: 0, opacity: 1, ease: Elastic.easeOut.config(1.2, 0.75) });
	}

	render() {
		return (
			<h2 className={styles.city} ref={c => this.el = c}>{this.props.children}</h2>
		)
	}
}

export default City;