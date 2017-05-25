import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Temperature.css';

class Temperature extends Component {
	constructor(props) {
		super(props);
		this.state = {value: this.props.value, animationInterval: 0};
	}

	componentWillReceiveProps (newProps) {
		if (this.props.value !== newProps.value) {
			this.setTemp(newProps.value);
			this.setState({animationInterval: 35});
		}
	}

	render() {
		return (
			<div className={styles.value}>{this.state.value}</div>
		)
	}

	setTemp(temp) {
		let oldTemp = this.state.value;

		let tempInterval = setInterval(() => {
			this.setState({
				value: oldTemp > temp ? --oldTemp : ++oldTemp
			});

			if (oldTemp === temp) {
				clearInterval(tempInterval);
			}
		}, this.state.animationInterval);
	}
}

Temperature.propTypes = {
	value: PropTypes.number.isRequired
};

export default Temperature;