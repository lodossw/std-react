import React, {Component} from 'react'; 
import WeatherForm from './weatherForm';
import WeatherMessage from './weatherMessage';
import openWeatherClassApp from '../../services/openWeatherClassApp';

class WeatherES6App extends Component {

    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
        this.state = {
            temp : '',
            location : ''
        }
    };

    onSearch(data) {
        var obj = this; 
        new openWeatherClassApp()
        .getTemp(data.location)
        .then(function(result){
            obj.setState({
                temp : result,
                location : data.location
            });
        }).catch(function(err){
            console.log(err);
        });
    };

    render() {

        var temp, location; 
        temp = this.state.temp; 
        location = this.state.location; 

        return (
            <div>
                <WeatherForm onSearch={this.onSearch} />
                <WeatherMessage temp={temp} location={location} />
            </div>
        );
    };

}

export default WeatherES6App; 