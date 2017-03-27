'use strict';

/*var React = require('react');
var WeatherForm = require('./weatherForm');*/
import React, {Component} from 'react'; 
import WeatherForm from './weatherForm';
import WeatherMessage from './weatherMessage';
//import OpenWeatherApp from '../../services/openWeatherApp';
var OpenWeatherApp = require('../../services/openWeatherApp');

class WeatherApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            location : 'seoul',
            temp : 23
        };

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch( data ) {
        
        var objThis = this; 

        OpenWeatherApp.getTemp(data.location)
        .then(function(temp){
            objThis.setState({
                location : data.location,
                temp : temp
            });
        }).catch(function(err) {
            console.log(err);
        });
        //this.setState({ location : cityName });
        /*
        this.setState((prevState, props) => {
            // ex prevState.key + props.value
            location : 
        });
        console.log(this.state);
        */

        this.setState({ 
            location : data.location,
            temp :  data.temp
        });

        console.log(this.state);
        
        //console.log(this.state.location); //-- ㄱ공백으로 나옴 ( setState() == async )
    }

    render() {

        var {temp, location} = this.state; 

        return (
            <div>
                <WeatherForm onSearch={this.onSearch}>{this.state.location}</WeatherForm>
                <WeatherMessage temp={temp} location={location}/>
            </div>
        )
    };

} 


export default WeatherApp;