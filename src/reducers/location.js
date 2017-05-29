const initialState = {
	city: '',
	latitude: null,
	longitude: null,
	isChanged: false
}

export default function location(state = initialState, action) {
	switch (action.type) {
		case 'RECEIVE_LOCATION':
			return {
				...state,
				city: action.city,
				latitude: action.latitude,
				longitude: action.longitude,
				isChanged: false
			}
		case 'CHANGE_LOCATION':
			return {
				...state,
				city: action.city,
				latitude: action.latitude,
				longitude: action.longitude,
				isChanged: true
			}
		default:
			return state;
	}
}