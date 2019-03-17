import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    let vrije = 'vrijednost';
    return (
      <div className="App">
        <MainContainer nesto={vrije} />
      </div>
    );
  }
}

export default App;
