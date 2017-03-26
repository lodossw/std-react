import React, {Component, Props} from 'react';

class WeatherForm extends Component {

    constructor( props ) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    } 

    onFormSubmit(e) {
        e.preventDefault();
        var cityName = this.refs.cityName; 

    }

    render() {
        return (
            <div>
                <form>
                    <h3>{this.props.children}</h3>
                    <input type="text" ref='cityName' placeholder='Enter city name'/>
                    <button>Get Weather</button>
                </form> 
            </div> 
        );
    }
};

//module.exports = WeatherForm; 
export default WeatherForm; 
