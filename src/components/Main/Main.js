import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Main.css';

import PageBackground from './../PageBackground/PageBackground';
import WeatherIcon from './../WeatherIcon/WeatherIcon';
import Temperature from './../Temperature/Temperature';
import Location from './../Location/Location';
import Loader from './../Loader/Loader';
import Error from './../Error/Error';

class Main extends Component {
	componentDidMount() {
		this.props.detectLocation();
	}

	render() {
		const { page, weather, location } = this.props;
		return (
			<div className={styles.container}>
				{ page.loading && <Loader /> }
				{ page.loadingError && <Error>Sorry, an error occurred. Try to disable blocker extentions and reload the page</Error> }
				<PageBackground background={page.background} />
				<Location city={location.city}
					editMode={page.editMode}
					onLocationSelect={this.props.selectLocation}
					onChangeLocationClick={this.props.switchEditMode.bind(null, true)}
					onBackLocationClick={this.props.detectLocation}
					onInputBlur={this.props.switchEditMode.bind(null, false)}
					locationIsChanged={location.isChanged} />
				<div className={styles.split}>
					<WeatherIcon code={weather.icon} class={styles.icon}/>
					<span className={styles.date}>Today</span>
				</div>
				<Temperature value={weather.temperature}/>
				<div className={styles.description}>{weather.description}</div>
				</div>
		)
	}
}

Main.propTypes = {
	pageBackground: PropTypes.string,
	location: PropTypes.object,
	editMode: PropTypes.bool,
	changeLocation: PropTypes.func,
	switchEditMode: PropTypes.func,
	weatherIcon: PropTypes.string,
	temperature: PropTypes.number,
	weatherDescription: PropTypes.string
};

export default Main;