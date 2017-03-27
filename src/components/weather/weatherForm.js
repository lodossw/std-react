import React, {Component, Props} from 'react';

class WeatherForm extends Component {

    constructor( props ) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    } 

    onFormSubmit(e) {
        e.preventDefault();
        var cityName = this.refs.cityName.value; 
        var temp = ''; 

        if(cityName.length > 0) {
           this.refs.cityName.value = ''; 
           var rtn = {
                location : cityName,
                temp : '23'
           };
           this.props.onSearch(rtn);
        }
     }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
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
