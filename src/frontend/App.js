import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Technologies from './Technologies';
import Details from './details/Details';
import NotFound from './NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <p className='code'>Jingles Hair education</p>
          <Switch>
            <Route exact path='/' component={Technologies} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:technologyId' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;