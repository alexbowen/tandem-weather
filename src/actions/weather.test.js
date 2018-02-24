import { getForecast } from './weather';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { WEATHER_REQUEST, WEATHER_SUCCESS } from './weather'
//see comment below
import { ADD_MESSAGE } from './messages'

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

        const store = mockStore({weather: {}})

        return store.dispatch(getForecast())
            .then((forecast) => {
                const expectedActions = store.getActions()
                expect(expectedActions.length).toBe(2)
                expect(expectedActions).toContainEqual({ type: WEATHER_REQUEST, interval: 8 })
                expect(expectedActions).toContainEqual({ type: WEATHER_SUCCESS, forecast: { "london": "hot" } })
            })
    })

    it('should call request and message actions if the fetch response failed', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.reject())

        const store = mockStore({weather: {}})

        return store.dispatch(getForecast())
            .then((forecast) => {
                const expectedActions = store.getActions()
                expect(expectedActions.length).toBe(2)
                expect(expectedActions).toContainEqual({ type: WEATHER_REQUEST, interval:8 })
                /**
                 * ADD_MESSAGE isnt mocked and it could/should be, but actually some
                 * refactoring needed as the catch block in the action should dispatch
                 * a WEATHER_ERROR action and the message should be handled elsewhere
                 */
                expect(expectedActions).toContainEqual({ type: ADD_MESSAGE, 'message' : {
                    type: 'danger',
                    text: 'Error with weather API request'
                }})
            })
    })
})