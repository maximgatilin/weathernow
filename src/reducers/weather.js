const initialState = {
	temperature: 0,
	description: '',
	icon: ''
}

export default function weather(state = initialState, action) {
	switch (action.type) {
		case 'RECEIVE_WEATHER':
			return {
				...state,
				temperature: action.temperature,
				description: action.description,
				icon: action.icon,

			}
		default:
			return state;
	}
}