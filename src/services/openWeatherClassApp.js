import axios from 'axios';

const APPID = '4df6dacf98db93283d3640aa6a37a7c2';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=4df6dacf98db93283d3640aa6a37a7c2'; 


class OpenWeatherClassApp {

    getTemp(location) {
        var encodedLocation = encodeURIComponen(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; 
        return axios.get(requestUrl)
        .then(
          function(res){
              if( res.data.cod && res.data.message ) {
                  throw new Error(res.data.message);
              } else {
                  return res.data.main.temp; 
              }
          }  
        ).catch(
            function(res) {
                throw new Error(res.data.message); 
            }
        );

    }
}

export default OpenWeatherClassApp; 