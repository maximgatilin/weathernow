const initialState = {
	editMode: false,
	background: 'linear-gradient(to top, #3498db, #3498db)',
	fetching: false,
	fetchingError: false,
	locationIsChanged: false
};

export default function page(state = initialState, action) {
	switch (action.type) {
		case 'REQUEST_LOCATION':
			return {...state, fetching: true}
		case 'RECEIVE_WEATHER':
			return {
				...state,
				background: action.background,
				fetching: false,
				fetchingError: false
			}
		case 'SWITCH_EDIT_MODE':
			return {
				...state,
				editMode: action.value
		}
		case 'LOADING_FAILED':
			return {
				...state,
				fetching: false,
				fetchingError: true
			}
		default:
			return state;
	}
}