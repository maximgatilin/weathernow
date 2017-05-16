import React, { Component } from 'react';

import styles from './Main.css';

import WeatherIcon from './../WeatherIcon/WeatherIcon';
import Temperature from './../Temperature/Temperature';
import fetchJsonp from 'fetch-jsonp';
import Location from './../Location/Location';

const locationReqUrl = 'https://freegeoip.net/json/';
const weatherApiUrl = 'https://api.darksky.net/forecast';
const weatherApiId = 'f482f8eeaaf27e35c0bc1b223999502f';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			city: "",
			temp: "",
			description: "",
			weatherKey: ""
		};
	}

	render() {
    return (
      <div className={styles.container}>
        <Location city={this.state.city}
          locationSelect={this.handleLocationSelect.bind(this)}/>
        <div className={styles.split}>
        	<WeatherIcon code={this.state.weatherKey} class={styles.icon}/>
        	<span className={styles.date}>Today</span>
        </div>
        <Temperature value={this.state.temp}/>
        <div className={styles.description}>{this.state.description}</div>
      </div>
    )
  }

  handleLocationSelect(place) {
    const location = {
     city: place.vicinity ,
     latitude: place.geometry.location.lat(),
     longitude: place.geometry.location.lng()
    };

    this.setCity(location);
    this.getWeather(location)
    .then( res => res.json() )
    .then( weatherData => this.showWeather(weatherData) )
    .then( weatherData => this.updateBackground(weatherData) );
  }

	componentDidMount() {
		this.getUserLocation()
    .then( res => res.json() )
    .then( location => this.setCity(location) )
		.then( location => this.getWeather(location) )
    .then( res => res.json() )
		.then( weatherData => this.showWeather(weatherData) )
		.then( weatherData => this.updateBackground(weatherData) );
  }

  getUserLocation() {
  	return fetch(locationReqUrl, {
      headers: {
        'Accept-Language':'en'
      }
    });
  }

  setCity(location) {
    this.setState({city: location.city});

    return location;
  }

  getWeather(location) {
			const latitude = location.latitude;
  		const longitude = location.longitude;

      return fetchJsonp(`${weatherApiUrl}/${weatherApiId}/${latitude},${longitude}?units=si&exclude=minutely,hourly,daily,alerts,flags`);
  }

  showWeather(weatherData) {
    const currentWeather = weatherData.currently;

		this.setState({
			temp: currentWeather.temperature.toFixed(),
			description: currentWeather.summary,
			weatherKey: currentWeather.icon
		});

		return currentWeather;
  }

  updateBackground(weather) {
		const background = this.getBackground(weather);
		document.documentElement.style.setProperty('--weather-background', background);

    // IOS Safari not rerender backgroud for body
    // Rewrite background directly to body's custom property
    document.body.style.setProperty('--weather-background', background);
  }

  getBackground(weather) {
  	const documentStyles = window.getComputedStyle(document.documentElement);

  	const sun = documentStyles.getPropertyValue('--sunny-background');
  	const moon = documentStyles.getPropertyValue('--moon-background');
  	const clouds = documentStyles.getPropertyValue('--clouds-background');
  	const nightClouds = documentStyles.getPropertyValue('--night-clouds-background');
  	const lightClouds = documentStyles.getPropertyValue('--light-clouds-background');
  	const snow = documentStyles.getPropertyValue('--snow-background');
  	const rain = documentStyles.getPropertyValue('--rain-background');
    const clear = documentStyles.getPropertyValue('--clear');

  	const backgrounds = {
  		"clear-day": weather.temperature > 15 ? sun : clear,
  		"clear-night": moon,
      "cloudy": clouds,
      "partly-cloudy-day": clouds,
      "partly-cloudy-night": nightClouds,
      "rain": rain,
      "snow": snow,
      "fog": nightClouds,
      "wind": lightClouds
  	};

  	return backgrounds[weather.icon];
  }
}

export default Main;