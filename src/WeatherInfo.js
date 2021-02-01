import React from 'react';

const weatherApiToken = process.env.REACT_APP_OPEN_WEATHER_KEY

class WeatherInfo extends React.Component {
    state = {
        descript: '',
        temp: 0,
        feelsLike: 0,
        humidity: 0,
        icon: ''
    }

    componentDidMount(){
        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10001&units=imperial&appid=${weatherApiToken}`)
        .then(resp => resp.json())
        .then(data => {console.log(data)
            this.setState({
                descript: data.weather[0].main,
                temp: data.main.temp,
                feelsLike: data.main.feels_like,
                humidity: data.main.humidity,
                icon: data.weather[0].icon
            }, ()=> console.log(this.state))
        })
    }

    render(){
        return (
            <div>
                <h1>Simple Weather</h1>
                <h4 className='intro'>The current weather in New York, NY:</h4>
                <img className='weatherIcon' src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt={this.state.descript} />
                <div className='current-weather'>
                   <h3 className='currentWeatherData'>{this.state.descript}</h3>
                   <p className='weatherDataName'>Current temperature: </p>
                   <h3 className='weatherData'>{this.state.temp} °F</h3>
                   <p className='weatherDataName'>Feels like: </p>
                   <h3 className='weatherData'>{this.state.feelsLike} °F</h3>
                   <p className='weatherDataName'>Humidity: </p>
                   <h3 className='weatherData'>{this.state.humidity}%</h3>
               </div>
            </div>
        )
    }
}

export default WeatherInfo;