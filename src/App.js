import React, { Component } from 'react';
import { Router } from '@reach/router'
import './App.css';
// import './components/NumberButtons.css'
import NumberButtons from './components/NumberButtons';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <NumberButtons path={'/'} />
        </Router>
      </div>
    );
  }
}

export default App;
