import { getForecast } from './weather';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_ERROR } from './weather'
import api from '../data/api'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
        status: status,
        statusText: statusText,
        headers: {
            'Content-type': 'application/json'
        }
    })
}

describe('Weather API actions', () => {
    it('should call request and success actions if the fetch response was successful', () => {
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve(mockResponse(200, null, '{"london":"hot"}')))

        const store = mockStore({weather: {dataFormat:'json', mapping: { json: api.mapping, csv: null }}})

        return store.dispatch(getForecast())
            .then((forecast) => {
                const expectedActions = store.getActions()
                expect(expectedActions.length).toBe(2)
                expect(expectedActions).toContainEqual({ type: WEATHER_REQUEST, interval: 8 })
                expect(expectedActions).toContainEqual({
                    type: WEATHER_SUCCESS,
                    forecast: { "london": "hot" },
                    dataFormat: 'json',
                    mapping: { json: api.mapping, csv: null }
                })
            })
    })

    it('should call request and message actions if the fetch response failed', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.reject())

        const store = mockStore({weather: {dataFormat:'json'}})

        return store.dispatch(getForecast())
            .then((forecast) => {
                const expectedActions = store.getActions()
                expect(expectedActions.length).toBe(2)
                expect(expectedActions).toContainEqual({ type: WEATHER_REQUEST, interval:8 })
                expect(expectedActions).toContainEqual({
                    type: WEATHER_ERROR,
                    'error' : {
                        type: 'danger',
                        text: 'Error with weather API request'
                    }
                })
            })
    })
})