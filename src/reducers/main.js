const mainReducer = (state , action) => {
	switch (action.type) {
		case 'REQUEST_LOCATION':
			return Object.assign({}, state, {
				loading: true
			})
		case 'RECEIVE_LOCATION':
			return Object.assign({}, state, {
			location: {
				city: action.city,
				latitude: action.latitude,
				longitude: action.longitude
			},
			locationIsChanged: false
		})
		case 'CHANGE_LOCATION':
			return Object.assign({}, state, {
				location: {
					city: action.city,
					latitude: action.latitude,
					longitude: action.longitude
				},
				locationIsChanged: true
			})
		case 'RECEIVE_WEATHER':
			return Object.assign({}, state, {
				temperature: action.temperature,
				weatherDescription: action.description,
				weatherIcon: action.icon,
				pageBackground: action.background,
				loading: false,
				loadingError: false
			})
		case 'SWITCH_EDIT_MODE':
			return Object.assign({}, state, {
				editMode: action.value
			})
		case 'LOADING_FAILED':
			return Object.assign({}, state, {
				loading: false,
				loadingError: true
			})
		default:
			return state;
	}
};

export default mainReducer;