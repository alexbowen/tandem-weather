import React from 'react'
import { splitDatasetArray } from './helpers/gridData'
import { getDate } from './helpers/displayUtils'
import Cell from './Cell'

const Grid = ({ forecast, location }) => (
    <div className="data-grid">
        <h2>{`Results for ${location}`}</h2>
        {splitDatasetArray(forecast, 5).map((day, index) =>
        <div key={index} className="row">
            <div className="col-12 col-md-2">
                <span>{getDate(day[0].dt_txt)}</span>
            </div>
            {day.map(interval =>
            <div key={interval.dt} className="col-3 col-md">
                <Cell time={interval.dt_txt} temperature={interval.main.temp} weather={interval.weather[0]} />
            </div>
            )}
        </div>
        )}
    </div>
)

export default Grid
