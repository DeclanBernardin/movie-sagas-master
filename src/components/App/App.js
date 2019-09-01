import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div>
          <Route exact path ='/' />
          <Route path = '/details'/>
          <Route exact path='/edit' />
        </div>
      </Router>
    );
  }
}

export default App;
