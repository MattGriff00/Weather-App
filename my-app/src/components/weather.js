import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const refresh = () => {
  window.location.reload();
}

const CardExampleCard = ({weatherData}) => (
    <div className="main">  

        <div className="top flex header">
          <h1 className="header">{weatherData.name}</h1>
          <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
        </div>

        <div className="flex">
          <p className="day">Day: {moment().format('dddd')}</p>
          <p className="day">{moment().format('LL')}</p>
        </div>
  
        <div className="flex">
          <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
          <p className="temp">Humidity: {weatherData.main.humidity} %</p>
        </div>
        
        <div className="flex">
          <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
          <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        </div>

    </div>
  )

export default CardExampleCard;