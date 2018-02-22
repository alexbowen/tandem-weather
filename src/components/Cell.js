import React from 'react'
import { convertKelvinToCelsius, getTime } from './helpers/displayUtils'

const Cell = ({ time, temperature }) => (
    <div className="forecast-cell">
        <span>{getTime(time)}</span>
        <span>{convertKelvinToCelsius(temperature)}&deg;C</span>
    </div>
)

export default Cell
