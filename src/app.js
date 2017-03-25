import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory } from 'react-router'; 

// history 의 세가지 타입 숙지하기 ^^

import {
    Home,
    About,
    Posts,
    Post,
    WeatherApp
} from './components'

import {
    MainController 
} from './controllers';

import app_css from './app.css';

//-- router 사용법숙지 
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={MainController}>
            <IndexRoute component={Home} />
            <Route path="/app-weather" component={WeatherApp} />
            <Route path="/about" component={About} />
            <Route path="/Posts" component={Posts} />
        </Route>
    </Router>,
    document.getElementById("app")
);
