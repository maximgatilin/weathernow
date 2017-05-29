import React, { Component } from 'react';
import styles from './App.css';
import MainContainer from './containers/MainContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<div className={styles.container}>
				<Header />
				<MainContainer />
				<Footer />
			</div>
		);
	}
}

export default App;
