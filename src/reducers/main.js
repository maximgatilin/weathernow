const mainReducer = (state , action) => {
  switch (action.type) {
    case 'REQUEST_LOCATION':
    	return state;    
    case 'RECEIVE_LOCATION':
    	return Object.assign({}, state, {
        location: {
          city: action.city,
          latitude: action.latitude,
          longitude: action.longitude
        }
      })
    case 'CHANGE_LOCATION':
      return Object.assign({}, state, {
        location: {
          city: action.city,
          latitude: action.latitude,
          longitude: action.longitude
        }
      })  
    case 'RECEIVE_WEATHER':
  	  return Object.assign({}, state, {
        temperature: action.temperature,
        weatherDescription: action.description,
        weatherIcon: action.icon,
        pageBackground: action.background
      })
    case 'SWITCH_EDIT_MODE':
      return Object.assign({}, state, {
        editMode: action.value
      })
    default:
      return state;  
  }
};

export default mainReducer;