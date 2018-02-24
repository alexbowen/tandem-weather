import { addMessage } from './messages'
import api from '../data/api'

export const WEATHER_REQUEST = 'WEATHER_REQUEST'
export const weatherRequest = interval => {
    return {
        type: WEATHER_REQUEST,
        interval
    }
}

export const WEATHER_SUCCESS = 'WEATHER_SUCCESS'
export const weatherSuccess = forecast => {
    return {
        type: WEATHER_SUCCESS,
        forecast
    }
}

export const SELECTED_UPDATE = 'SELECTED_UPDATE'
export const updateSelected = selected => {
    return {
        type: SELECTED_UPDATE,
        selected
    }
}

const API_KEY = '56664e8f64055096a12f788307109538'

export const getForecast = () => {

    return (dispatch, getState) => {

        const { location } = getState().weather
        dispatch(weatherRequest(api.interval))

        return fetch(`${api.endpoint}?q=${location}&APPID=${API_KEY}`)
            .then(response => response.json())
            .then(json => dispatch(weatherSuccess(json)))
            .catch(error => {
                dispatch(addMessage({
                    type: 'danger',
                    text: 'Error with weather API request'
                }))
            })
    }
}