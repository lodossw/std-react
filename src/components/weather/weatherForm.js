import React, {Component} from 'react';

class WeatherForm extends Component {

    constructor( props ) {
        super(props);
    } 

    render() {
        return (
            <div>
                <form>
                    <input type="text" />
                    <button>Get Weather</button>
                </form> 
            </div> 
        );
    }
};

export default WeatherForm; 