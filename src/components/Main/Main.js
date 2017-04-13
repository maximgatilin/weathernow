import React, { Component } from 'react';
import axios from 'axios';
import styles from './Main.css';
import weatherCodes from './../../data/weatherCodes';
import WeatherIcon from './../WeatherIcon/WeatherIcon';
import Temperature from './../Temperature/Temperature';

const locationReqUrl = 'http://freegeoip.net/json/';
const weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const weatherApiId = '78fde333ab6d0dfbcb3368643680ae9a';
const weatherUnits = 'metric';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			city: "",
			temp: "",
			description: "",
			iconCode: ""
		}
	}

	render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.city}>{this.state.city}</h2>
        <div className={styles.split}>
        	<WeatherIcon code={this.state.iconCode} class={styles.icon}/>
        	<span className={styles.date}>Today</span>
        </div>
        <Temperature value={this.state.temp}/>
        <div className={styles.description}>{this.state.description}</div>
        
      </div>
    )
  }

	componentDidMount() {
		this.getUserLocation()
		.then( location => this.getWeather(location.data) )
		.then( weatherData => this.showWeather(weatherData) )
		.then( weatherData => this.updateBackground(weatherData) );
  }

  getUserLocation() {
  	return axios.get(locationReqUrl);
  }

  getWeather(location) {
			const latitude = location.latitude;
  		const longitude = location.longitude;

  		return axios.get(`${weatherApiUrl}lat=${latitude}&lon=${longitude}&appid=${weatherApiId}&units=${weatherUnits}`);
  }

  showWeather(weatherData) {
			const weather = weatherData.data.weather[0];
			const descriptionCode = weather.id;
			const description = weatherCodes[descriptionCode];

			this.setState({
				city: weatherData.data.name,
				temp: weatherData.data.main.temp.toFixed(),
				description: description,
				iconCode: weather.icon
			});

			return weather;
  }

  updateBackground(weather) {
		const background = this.getBackgroundByKey(weather.icon);
		document.documentElement.style.setProperty('--weather-background', background);
  }

  getBackgroundByKey(key) {
  	const documentStyles = window.getComputedStyle(document.documentElement);

  	const sun = documentStyles.getPropertyValue('--sunny-background');
  	const moon = documentStyles.getPropertyValue('--moon-background');
  	const clouds = documentStyles.getPropertyValue('--clouds-background');
  	const nightClouds = documentStyles.getPropertyValue('--night-clouds-background');
  	const lightClouds = documentStyles.getPropertyValue('--light-clouds-background');
  	const nightLightClouds = documentStyles.getPropertyValue('--night-light-clouds-background');
  	const snow = documentStyles.getPropertyValue('--snow-background');
  	const rain = documentStyles.getPropertyValue('--rain-background');
  	const thunderstorm = documentStyles.getPropertyValue('--thunderstorm-background');

  	const backgrounds = {
  		"01d": sun,
  		"01n": moon,
      "02d": lightClouds,
      "02n": nightLightClouds,
      "03d": clouds,
      "03n": nightClouds,
      "04d": rain,
      "04n": rain,
      "09d": rain,
      "09n": rain,
      "10d": rain,
      "10n": rain,
      "11d": thunderstorm,
      "11n": thunderstorm,
      "13d": snow,
      "13n": snow,
      "50d": nightClouds,
      "50n": nightClouds
  	};

  	return backgrounds[key];
  }
}

export default Main;