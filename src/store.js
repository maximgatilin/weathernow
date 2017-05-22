import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import mainReducer from './reducers/main';
const loggerMiddleware = createLogger();

const initialState = {
  location: {
    city: null,
    latitude: null,
    longitude: null
  },
  temperature: null,
  editMode: false,
  weatherDescription: '',
  weatherIcon: null
};

const store = createStore(
	mainReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware 
  ),
  // enables redux devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;