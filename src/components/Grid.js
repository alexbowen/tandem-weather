import React from 'react'
import { splitDatasetArray } from './helpers/gridData'
import { getDate } from './helpers/displayUtils'
import Cell from './Cell'

const Grid = ({ forecast, location, columns, source }) => (
    <div className="data-grid">
        <h2>{`Results for ${location} from ${source.toUpperCase()} source`}</h2>
        {splitDatasetArray(forecast, columns).map((day, dayIndex) =>
        <div key={dayIndex} className="row">
            <div className="col-12 col-lg-2">
                <span>{getDate(day.find(interval => interval !== null).time)}</span>
            </div>
            {day.map((interval, index) =>
            <div key={index} className="col-3 col-lg">
            {interval ?
            <Cell time={interval.time} temperature={interval.temp} weather={interval.weather} />
            : ''}
            </div>
            )}
        </div>
        )}
    </div>
)

export default Grid
