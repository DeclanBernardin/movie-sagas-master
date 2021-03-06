import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Movie from '../Movie/Movie'
import Details from '../Details/Details'
import Edit from '../Edit/Edit'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div>
          <Route exact path ='/' component={Movie}/>
          <Route path = '/details' component={Details}/>
          <Route path ='/edit' component={Edit}/>
        </div>
      </Router>
    );
  }
}

export default App;
