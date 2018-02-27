import api from '../data/api'
import { fetchData } from './helpers/data'

export const WEATHER_REQUEST = 'WEATHER_REQUEST'
export const weatherRequest = interval => {
    return {
        type: WEATHER_REQUEST,
        interval
    }
}

export const WEATHER_SUCCESS = 'WEATHER_SUCCESS'
export const weatherSuccess = (forecast, dataFormat, mapping) => {
    return {
        type: WEATHER_SUCCESS,
        forecast,
        dataFormat,
        mapping
    }
}

export const WEATHER_ERROR = 'WEATHER_ERROR'
export const weatherError = error => {
    return {
        type: WEATHER_ERROR,
        error
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

    return async(dispatch, getState) => {

        dispatch(weatherRequest(api.interval))

        const { location, dataFormat } = getState().weather

        const params = {
            xhr: { url: `${api.endpoint}?q=${location}&APPID=${API_KEY}` }
        }

        try {
            const forecast = await fetchData(dataFormat, params)
            dispatch(weatherSuccess(forecast, dataFormat, {json: api.mapping, csv: null}))
        } catch (error) {
            dispatch(weatherError({ type: 'danger', text: 'Error with weather API request' }))
        }
    }
}