import React from 'react'
import { convertKelvinToCelsius, getTime } from './helpers/displayUtils'

const Cell = ({ time, temperature, weather }) => (
    <div className="forecast-cell">
        <span><img src={`http://openweathermap.org/img/w/${weather.icon}.png`} height="50px" width="50px" alt={weather.description} /></span>
        <span>{getTime(time)}</span>
        <span>{convertKelvinToCelsius(temperature)}&deg;C</span>
    </div>
)

export default Cell
