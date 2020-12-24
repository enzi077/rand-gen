import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Registered from './Registered'
import Success from './Success'
import Failed from './Failed'

ReactDOM.render(
  <Router>
        <Route exact path="/" component={App}/>
        <Route exact path="/registered" component={Registered}/>
        <Route exact path="/success" component={Success}/>
        <Route exact path="/failed" component={Failed}/>
  </Router>,
  document.getElementById('root')
);