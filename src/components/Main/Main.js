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
		.then( weatherData => this.showWeather(weatherData) );
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
				temp: weatherData.data.main.temp,
				description: description,
				iconCode: weather.icon
			});
  }
}

export default Main;