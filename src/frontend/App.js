import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './gallery/Gallery';
import Details from './details/Details';
import NotFound from './not-found/NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <p className='code'>Jingles Hair education</p>
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route path='/not-found' component={NotFound} />
            <Route path='/:showId' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
