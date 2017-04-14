import React, { Component } from 'react';
import styles from './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
    	<div className={styles.container}>
    		<Header />
        <Main />
        <Header />
      </div>  
    );
  }
}

export default App;
