import React, {Component, Props} from 'react';

class WeatherMessage extends Component {

    render() {
        
        var {temp, location} = this.props; 

        return(
            <h3>It's {temp} in {location}.</h3>
        );
    };
}

export default WeatherMessage;  