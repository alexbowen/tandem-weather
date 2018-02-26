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

const request = async(url) => {
    const response = await fetch(url)
    return await response.json()
}

export const getForecast = () => {

    return async(dispatch, getState) => {

        dispatch(weatherRequest(api.interval))

        const { location } = getState().weather

        try {
            const success = await request(`${api.endpoint}?q=${location}&APPID=${API_KEY}`)
            dispatch(weatherSuccess(success))
        } catch (error) {
            dispatch(weatherError({type: 'danger', text: 'Error with weather API request'}))
        }
    }
}