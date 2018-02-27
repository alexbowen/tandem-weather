import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_ERROR, SELECTED_UPDATE } from '../actions/weather'
import { pad, applyMapping } from './helpers/dataSet'

const defaultState = {
    dataFormat: 'json',
    location: 'london,gb',
    messages: []
}

const boundryFn = (value) => new Date(value.time).getHours() === 0

const weather = (state = defaultState, action) => {
    switch (action.type) {
        case WEATHER_REQUEST:
            return {
                ...state,
                interval: action.interval
            }

        case WEATHER_SUCCESS:
            return {
                ...state,
                forecast: {
                    list: pad(
                        applyMapping(action.forecast.list, action.mapping[action.dataFormat]),
                        state.interval,
                        boundryFn
                    ),
                    city: {
                        name: action.forecast.city.name
                    },
                    dataFormat: action.dataFormat
                }
            }

        case WEATHER_ERROR:
            return {
                ...state,
                messages: [ action.error ]
            }

        case SELECTED_UPDATE:
            return {
                ...state,
                ...action.selected
            }

        default:
            return state
    }
}

export default weather