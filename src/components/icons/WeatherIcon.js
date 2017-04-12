import React, { Component } from 'react';
import SunIcon from './SunIcon';
import SunCloudsIcon from './SunCloudsIcon';
import MoonIcon from './MoonIcon';
import MoonCloudsIcon from './MoonCloudsIcon';
import CloudsBrokenIcon from './CloudsBrokenIcon';
import CloudsIcon from './CloudsIcon';
import RainIcon from './RainIcon';
import RainShowerIcon from './RainShowerIcon';
import SnowIcon from './SnowIcon';
import ThunderIcon from './ThunderIcon';

class WeatherIcon extends Component {
  render() {
    return (
    	<div>{this.getIcon(this.props.code)}</div>
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