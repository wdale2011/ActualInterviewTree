import React, { Component } from 'react';
import Head from './components/Head';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Company Tree</h1>
        <Head />
      </div>
    );
  }
}

export default App;
