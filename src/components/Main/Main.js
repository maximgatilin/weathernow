import React, { Component } from 'react';

import styles from './Main.css';

import WeatherIcon from './../WeatherIcon/WeatherIcon';
import Temperature from './../Temperature/Temperature';
import Location from './../Location/Location';

class Main extends Component {
	render() {
    return (
      <div className={styles.container}>
      <span style={{'background': this.props.pageBackground }} className={styles.pageBackground}></span>
        <Location city={this.props.location.city}
          editMode={this.props.editMode}
          onLocationSelect={this.props.changeLocation}
          onChangeLocationClick={this.props.switchEditMode.bind(null, true)}
          onInputBlur={this.props.switchEditMode.bind(null, false)} />
        <div className={styles.split}>
         <WeatherIcon code={this.props.weatherIcon} class={styles.icon}/>
        	<span className={styles.date}>Today</span>
        </div>
        <Temperature value={this.props.temperature}/>
        <div className={styles.description}>{this.props.weatherDescription}</div>
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
    this.props.detectLocation.call(this);
  }

  setTemp(temp) {
    let oldTemp = this.state.temp;
    if (oldTemp === '') {
      this.setState({
        temp
      });
      return;
    }

    let tempInterval = setInterval(() => {
      this.setState({
        temp: oldTemp > temp ? --oldTemp : ++oldTemp
      });

      if (oldTemp === temp) {
        clearInterval(tempInterval);
      }
    }, 35);
    
  }
}

export default Main;