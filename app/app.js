import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router'; 

import Main from 'main'; 
import Weather from 'weather'; 
import About from 'about';
import Examples from 'examples';

/*
    var Route = require('react-router').Route; 
    var obj = {
        name : 'Andrew',
        id : 'lodossw',
        password : '1234'
    };

    var {name} = obj; 
    var {id, password} = obj 

    console.log(name);
    console.log(id + ' --- ' + password);
*/


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
         <Route path="/about" component={About}/>
         <Route path="/examples" component={Examples}/>
         <IndexRoute component={Weather}/>
        </Route> 
    </Router>,
    document.getElementById("app")
)