'use strict';

/*var React = require('react');
var WeatherForm = require('./weatherForm');*/
import React, {Component} from 'react'; 
import WeatherForm from './weatherForm';
import WeatherMessage from './weatherMessage';



class WeatherApp extends React.Component {


    render() {
        return (
            <div>
                <WeatherForm>City Weather</WeatherForm>
                <WeatherMessage />
            </div>
        )
    };

} 


export default WeatherApp;