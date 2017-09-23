import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	console.log('Test for super branch');
	ReactDOM.render(<App />, div);
});
