import fetchJsonp from 'fetch-jsonp';

import * as config from './../config.js';

const { locationReqUrl, weatherApiUrl, weatherApiId } = config;

// Location
export function requestLocation() {
	return {
		type: 'REQUEST_LOCATION'
	}
}

export function receiveLocation(location) {
	return {
		type: 'RECEIVE_LOCATION',
		city: location.city,
		latitude: location.latitude,
		longitude: location.longitude
	}
}

export function selectLocation(location) {
	return function(dispatch) {
		dispatch(switchEditMode(false));
		dispatch(changeLocation({
			city: location.vicinity,
    	latitude: location.geometry.location.lat(),
    	longitude: location.geometry.location.lng()
		}));

		dispatch(getWeather());
	}
}

export function detectLocation() {
	return function(dispatch) {
		dispatch(requestLocation());

		return fetch(locationReqUrl, {
      headers: {
        'Accept-Language':'en'
      }
    })
    .then(response => response.json())
    .then(location => {
    	dispatch(receiveLocation(location))
    	dispatch(getWeather())
    })
    .catch(error => dispatch( loadingFailed() ));
	}
}

export function changeLocation(location) {
	return {
		type: 'CHANGE_LOCATION',
		city: location.city,
		latitude: location.latitude,
		longitude: location.longitude
	}
}
// Location###

// Weather
export function requestWeather(location) {
	return {
		type: 'REQUEST_WEATHER'
	}
}

export function receiveWeather(weather) {
	return {
		type: 'RECEIVE_WEATHER',
		temperature: Number(weather.currently.temperature.toFixed()),
		description: weather.currently.summary,
		icon: weather.currently.icon,
		background: getBackgroundByKey(weather)
	}
}

export function getWeather() {
	return function(dispatch, getState) {
		dispatch(requestWeather());

		const { latitude, longitude } = getState().location;

    return fetchJsonp(`${weatherApiUrl}/${weatherApiId}/${latitude},${longitude}?units=si&exclude=minutely,hourly,daily,alerts,flags`)
    .then(response => response.json())
    .then(weather => {
    	dispatch(receiveWeather(weather));
    })
    .catch(error => dispatch( loadingFailed() ));
	};
}

function getBackgroundByKey(weather) {
	const sun = 'linear-gradient(to top, #e85a8a, #faae56)';
	const moon = 'linear-gradient(to top, #141e30, #243b55)';
	const clouds = 'linear-gradient(to top, #757f9a, #d7dde8)';
	const nightClouds = 'linear-gradient(to top, #37393d, #101b30)';
	const lightClouds = 'linear-gradient(to top, #4ca1af, #c4e0e5)';
	const snow = 'linear-gradient(to top, #085078, #85d8ce)';
	const rain = 'linear-gradient(to top, #2c3e50, #bdc3c7)';
  const clear = 'linear-gradient(to top, #2f80ed, #56ccf2)';

  const backgrounds = {
		"clear-day": weather.currently.temperature > 15 ? sun : clear,
		"clear-night": moon,
    "cloudy": clouds,
    "partly-cloudy-day": clouds,
    "partly-cloudy-night": nightClouds,
    "rain": rain,
    "snow": snow,
    "fog": nightClouds,
    "wind": lightClouds
  };

  return backgrounds[weather.currently.icon];
}
// Weather###

// Other
export function switchEditMode(value) {
	return  {
		type: 'SWITCH_EDIT_MODE',
		value
	};
}

export function onCityPick(city) {
	return {
		type:'PICK_CITY',
		city
	};
}

export function loadingFailed() {
	return {
		type: 'LOADING_FAILED'
	}
}
// Other###






