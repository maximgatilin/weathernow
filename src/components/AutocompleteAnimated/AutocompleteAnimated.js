import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-google-autocomplete';
import { TweenLite, Power1 } from 'gsap';

import styles from './AutocompleteAnimated.css';

class AutocompleteAnimated extends Component {
	componentWillAppear() {
		const el = this.container;
		TweenLite.fromTo(el, 0.2, { opacity: 0.2, y:-10 }, { opacity: 1, y: 0, ease: Power1.easeInOut });
	}

	render() {
		const { onInputBlur, onLocationSelect } = this.props;
			return (
				<div ref={c => this.container = c}>
					<Autocomplete
						key="autocomplete"
						className={styles.input}
						types={['(cities)']}
						autoFocus
						placeholder="Start typing your location"
						onBlur={onInputBlur}
						onPlaceSelected={onLocationSelect} />
				</div>
			);
	}
}

AutocompleteAnimated.propTypes = {
	onInputBlur: PropTypes.func,
	onLocationSelect: PropTypes.func,
};

export default AutocompleteAnimated;