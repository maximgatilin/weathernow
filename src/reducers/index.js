import { combineReducers } from 'redux';
import page from './page';
import location from './location';
import weather from './weather';

export default combineReducers({
	page,
	location,
	weather
});