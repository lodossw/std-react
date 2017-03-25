var React = require('react');
var styles = require('./css/style.css');

const WeatherApp = () => {
    return (   
        <div>
            <h1 className={styles['big-text']}>Wheather</h1>
        </div>
    );
};

module.exports = WeatherApp;