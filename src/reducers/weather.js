import { WEATHER_REQUEST, WEATHER_SUCCESS, SELECTED_UPDATE } from '../actions/weather'

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
            return {
                ...state,
                forecast: action.forecast
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