import React from 'react';

const weatherApiToken = process.env.REACT_APP_OPEN_WEATHER_KEY

class WeatherInfo extends React.Component {
    state = {
        decript: '',
        temp: 0,
        feelsLike: 0,
        humidity: 0,
        icon: ''
    }

    componentDidMount(){
        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10901&units=imperial&appid=${weatherApiToken}`)
        .then(resp => resp.json())
        .then(data => {console.log(data)
            this.setState({
                decript: data.weather[0].main,
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
                <h1>Simple Weather!!!!</h1>
            </div>
        )
    }
}

export default WeatherInfo;