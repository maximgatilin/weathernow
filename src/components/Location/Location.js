import React, { Component } from 'react';

import ChangeLocation from './../ChangeLocation/ChangeLocation';
import Autocomplete from 'react-google-autocomplete';

import styles from './Location.css';

class Location extends Component {
	constructor(props) {
		super(props);

		this.state = {
      editMode: false
		};
	}

  render() {
  	const editMode = this.state.editMode;

     if (editMode) {
      return (
      	<Autocomplete className={styles.input} autoFocus placeholder="Start typing your location"
      	 onBlur={this.handleInputBlur.bind(this)} onPlaceSelected={this.props.locationSelect} types={['(cities)']} />
      	);
    } else {
    	return (
    		<div><ChangeLocation clickHandler={this.handleLocationChange.bind(this)} />
     			<h2 className={styles.city}>{this.props.city}</h2>
     		</div>
     );
     
    }
  }

  handleLocationChange() {
    this.setState({ editMode: true });
  }

  handleInputBlur() {
  	this.setState({ editMode: false });
  }
}

export default Location;