import React from 'react';

const weatherApiToken = process.env.OPEN_WEATHER_KEY

class WeatherInfo extends React.Component {
    render(){
        
        return (
            <div>
                <h1>Simple Weather!!!!</h1>
            </div>
        )
    }
}

export default WeatherInfo;