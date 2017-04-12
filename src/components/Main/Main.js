import React, { Component } from 'react';
// import styles from './Main.css';
import axios from 'axios';
import weatherCodes from './../../data/weatherCodes';
import WeatherIcon from './../icons/WeatherIcon';

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

  render() {
    return (
      <div>
        <h2>{this.state.city}</h2>
        <p>Today</p>
        <p>{this.state.temp}&#x2103;</p>
        <p>{this.state.description}</p>
        <WeatherIcon code={this.state.iconCode}/>
      </div>
    )
  }
}

export default Main;