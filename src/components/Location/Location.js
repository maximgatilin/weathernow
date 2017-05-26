import React from 'react';
import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import styles from './Location.css';

import City from './../City/City';
import AutocompleteAnimated from './../AutocompleteAnimated/AutocompleteAnimated';
import SimpleButton from './../SimpleButton/SimpleButton';
import LocationIcon from './../icons/LocationIcon';
import BackIcon from './../icons/BackIcon';

const propTypes = {
	city: PropTypes.string.isRequired,
	editMode: PropTypes.bool,
	onInputBlur: PropTypes.func,
	onLocationSelect: PropTypes.func,
	onChangeLocationClick: PropTypes.func,
	onBackLocationClick: PropTypes.func,
	locationIsChanged: PropTypes.bool
};

export default function Location({ editMode, onInputBlur, onLocationSelect, city, onChangeLocationClick, onBackLocationClick, locationIsChanged }) {
	if (editMode) {
			return (
				<div className={styles.block}>
					<TransitionGroup key="autocompleteTransitionGroup">
						<AutocompleteAnimated key="Autocomplete" onInputBlur={onInputBlur} onLocationSelect={onLocationSelect} />
					</TransitionGroup>
				</div>
			);
	} else {
		return (
			<div className={styles.block}>
				<TransitionGroup key="cityTransitionGroup">
					<City key="city">{city}</City>
					<SimpleButton key="changeLocation"
						clickHandler={onChangeLocationClick}
						animated={true}
						animationType="toTop"
						animationDelay={0.1}>
							<LocationIcon styles={styles.locationIcon}/>
							Change location
					</SimpleButton>
					{ locationIsChanged && <SimpleButton key="backLocation"
						clickHandler={onBackLocationClick}
						animated={true}
						animationType="toTop"
						animationDelay={0.2}
						animateWhenMounted={true}>
							<BackIcon styles={styles.backIcon}/>
							Back to my location
					</SimpleButton> }
				</TransitionGroup>
			</div>
		);
	}
}

Location.propTypes = propTypes;