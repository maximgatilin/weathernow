import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

	componentDidMount() {
    this.props.detectLocation();
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