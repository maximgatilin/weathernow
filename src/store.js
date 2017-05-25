import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from './reducers/main';

const initialState = {
  location: {
    city: '',
    latitude: null,
    longitude: null
  },
  temperature: 0,
  editMode: false,
  weatherDescription: '',
  weatherIcon: '',
  pageBackground: 'linear-gradient(to top, #3498db, #3498db)',
  loading: false,
  loadingError: false,
  locationIsChanged: false
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  mainReducer,
  initialState,
  composeEnhancers(
    applyMiddleware( 
      thunkMiddleware
    )
  )
);

export default store;