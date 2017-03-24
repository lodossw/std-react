//React-router v3
import React, {Component} from 'react'; 
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';

import Index from 'Index';
import Home from 'Home';
import About from 'About';
import Posts from 'Posts';

import './app.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Index}>
            <IndexRoute component={Home} />
            <Route path='/about' component={About} />
            <Route path='/post' component={Posts} />
        </Route> 
    </Router>, 
    document.getElementById('app')
);