import { WEATHER_REQUEST, WEATHER_SUCCESS, SELECTED_UPDATE } from '../actions/weather'
import { pad } from './helpers/dataSet'

const defaultState = {
    dataFormat: 'json',
    location: 'london,gb'
}

const weather = (state = defaultState, action) => {
    switch (action.type) {
        case WEATHER_REQUEST:
            return {
                ...state,
                interval: action.interval
            }

        case WEATHER_SUCCESS:

            const boundryFn = (value) => new Date(value.dt_txt).getHours() === 0

            return {
                ...state,
                forecast: {
                    list: pad(action.forecast.list, state.interval, boundryFn),
                    city: {
                        name: action.forecast.city.name
                    }
                }
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