import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Registered from './Registered'

ReactDOM.render(
  <Router>
        <Route exact path="/" component={App}/>
        <Route exact path="/registered" component={Registered}/>
  </Router>,
  document.getElementById('root')
);