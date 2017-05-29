const initialState = {
	editMode: false,
	background: 'linear-gradient(to top, #3498db, #3498db)',
	loading: false,
	loadingError: false,
	locationIsChanged: false
};

export default function page(state = initialState, action) {
	switch (action.type) {
		case 'REQUEST_LOCATION':
			return {...state, loading: true}
		case 'RECEIVE_WEATHER':
			return {
				...state,
				background: action.background,
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
}