import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import styles from './Location.css';

import ChangeLocation from './../ChangeLocation/ChangeLocation';
import City from './../City/City';
import AutocompleteAnimated from './../AutocompleteAnimated/AutocompleteAnimated';

class Location extends Component {
  render() {
  	const { editMode, onInputBlur, onLocationSelect, city, onChangeLocationClick } = this.props;
    
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
            <ChangeLocation key="changeLocation" clickHandler={onChangeLocationClick} />
          </TransitionGroup>
     		</div>
      );
    }
  }
}

Location.propTypes = {
  city: PropTypes.string.isRequired,
  editMode: PropTypes.bool,
  onInputBlur: PropTypes.func,
  onLocationSelect: PropTypes.func,
  onChangeLocationClick: PropTypes.func
};

export default Location;