import axios from 'axios';

const APPID = '4df6dacf98db93283d3640aa6a37a7c2';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=4df6dacf98db93283d3640aa6a37a7c2'; 

/*
class OpenWeatherApp { // OpenWeatherMap(); 

    getTemp(location) {

        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; //-- 백틱 ` 을 사용하여 감싼다.

        return axios.get(requestUrl)
        .then( 
        function( res ) { // success 
            if( res.data.cod && res.data.message ) {
                throw new Error(res.data.message); 
            } else {
                return res.data.main.temp; 
            }
        }).catch(
        function( res ) { // error 
            throw new Error(res.data.message); 
        });
    
    }
}

export default OpenWeatherApp;
*/

module.exports = {
    getTemp : function(location) {
        
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; 

        return axios.get(requestUrl)
        .then( function( res ) { // success 
            if( res.data.cod && res.data.message ) {
                throw new Error(res.data.message); 
            } else {
                return res.data.main.temp; 
            }
        })
        .catch( function( res ) { // error 
            throw new Error(res.data.message); 
        });
    
    }
};