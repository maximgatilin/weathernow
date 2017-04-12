import React, { Component } from 'react';
import SunIcon from './../icons/SunIcon';
import SunCloudsIcon from './../icons/SunCloudsIcon';
import MoonIcon from './../icons/MoonIcon';
import MoonCloudsIcon from './../icons/MoonCloudsIcon';
import CloudsBrokenIcon from './../icons/CloudsBrokenIcon';
import CloudsIcon from './../icons/CloudsIcon';
import RainIcon from './../icons/RainIcon';
import RainShowerIcon from './../icons/RainShowerIcon';
import SnowIcon from './../icons/SnowIcon';
import ThunderIcon from './../icons/ThunderIcon';

import styles from './WeatherIcon.css';

class WeatherIcon extends Component {
  render() {
    return (
    	<div className={styles.icon}>{this.getIcon(this.props.code)}</div>
    )
  }

  getIcon(code) {
  	const icons = {
  		"01d": <SunIcon />,
  		"01n": <MoonIcon />,
      "02d": <SunCloudsIcon />,
      "02n": <MoonCloudsIcon />,
      "03d": <CloudsIcon />,
      "03n": <CloudsIcon />,
      "04d": <CloudsBrokenIcon />,
      "04n": <CloudsBrokenIcon />,
      "09d": <RainShowerIcon />,
      "09n": <RainShowerIcon />,
      "10d": <RainIcon />,
      "10n": <RainIcon />,
      "11d": <ThunderIcon />,
      "11n": <ThunderIcon />,
      "13d": <SnowIcon />,
      "13n": <SnowIcon />
  	};
  	return icons[code];
  }
}

export default WeatherIcon;