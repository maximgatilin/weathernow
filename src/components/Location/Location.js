import React, { Component } from 'react';

import ChangeLocation from './../ChangeLocation/ChangeLocation';
import Autocomplete from 'react-google-autocomplete';

import styles from './Location.css';

class Location extends Component {
  render() {
  	const { editMode, onInputBlur, onLocationSelect, city, onChangeLocationClick } = this.props;

     if (editMode) {
      return (
      	<div className={styles.block}>
      		<Autocomplete className={styles.input}
            types={['(cities)']}
            autoFocus
            placeholder="Start typing your location"
      	    onBlur={onInputBlur}
            onPlaceSelected={onLocationSelect} />
      	</div>
      );
    } else {
    	return (
    		<div className={styles.block}>
     			<h2 className={styles.city}>{city}</h2>
     			<ChangeLocation clickHandler={onChangeLocationClick} />
     		</div>
      );
    }
  }
}

export default Location;