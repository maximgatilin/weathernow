const mainReducer = (state , action) => {
	switch (action.type) {
		case 'REQUEST_LOCATION':
			return {...state, loading: true}
		case 'RECEIVE_LOCATION':
			return {
					...state,
				location: {
					city: action.city,
					latitude: action.latitude,
					longitude: action.longitude
				},
				locationIsChanged: false
			}
		case 'CHANGE_LOCATION':
			return {
				...state,
				location: {
					city: action.city,
					latitude: action.latitude,
					longitude: action.longitude
				},
				locationIsChanged: true
			}
		case 'RECEIVE_WEATHER':
			return {
				...state,
				temperature: action.temperature,
				weatherDescription: action.description,
				weatherIcon: action.icon,
				pageBackground: action.background,
				loading: false,
				loadingError: false
			}
		case 'SWITCH_EDIT_MODE':
			return {
				...state,
				editMode: action.value
			}
		case 'LOADING_FAILED':
			return {
				...state,
				loading: false,
				loadingError: true
			}
		default:
			return state;
	}
};

export default mainReducer;