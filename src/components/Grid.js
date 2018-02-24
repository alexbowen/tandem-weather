import React from 'react'
import { splitDatasetArray } from './helpers/gridData'
import { getDate } from './helpers/displayUtils'
import Cell from './Cell'

const Grid = ({ forecast, location, columns }) => (
    <div className="data-grid">
        <h2>{`Results for ${location}`}</h2>
        {splitDatasetArray(forecast, columns).map((day, dayIndex) =>
        <div key={dayIndex} className="row">
            <div className="col-12 col-lg-2">
                <span>{getDate(day.find(interval => interval !== null).dt_txt)}</span>
            </div>
            {day.map((interval, index) =>
            <div key={index} className="col-3 col-lg">
            {interval ?
            <Cell time={interval.dt_txt} temperature={interval.main.temp} weather={interval.weather[0]} />
            : ''}
            </div>
            )}
        </div>
        )}
    </div>
)

export default Grid
