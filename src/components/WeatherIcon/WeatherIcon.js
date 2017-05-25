import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SunIcon from './../icons/SunIcon';
import SunCloudsIcon from './../icons/SunCloudsIcon';
import MoonIcon from './../icons/MoonIcon';
import MoonCloudsIcon from './../icons/MoonCloudsIcon';
import CloudsIcon from './../icons/CloudsIcon';
import RainIcon from './../icons/RainIcon';
import SnowIcon from './../icons/SnowIcon';
import MistIcon from './../icons/MistIcon';
import WindIcon from './../icons/WindIcon';


import styles from './WeatherIcon.css';

class WeatherIcon extends Component {
  render() {
    return (
          <div className={styles.icon}>{this.getIcon(this.props.code)}</div>
    )
  }

  getIcon(code) {
  	const icons = {
      "clear-day": <SunIcon />,
      "clear-night": <MoonIcon />,
      "cloudy": <CloudsIcon />,
      "partly-cloudy-day": <SunCloudsIcon />,
      "partly-cloudy-night": <MoonCloudsIcon />,
      "rain": <RainIcon />,
      "snow": <SnowIcon />,
      "fog": <MistIcon />,
      "wind": <WindIcon />,
  	};
  	return icons[code];
  }
}

WeatherIcon.propTypes = {
  code: PropTypes.string.isRequired
};

export default WeatherIcon;