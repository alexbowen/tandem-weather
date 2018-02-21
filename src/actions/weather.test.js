import { getForecast } from './weather';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { WEATHER_REQUEST, WEATHER_SUCCESS } from './weather'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
        status: status,
        statusText: statusText,
        headers: {
            'Content-type': 'application/json'
        }
    });
};

it('calls request and success actions if the fetch response was successful', () => {
    window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, '{"london":"hot"}')));

    const store = mockStore({weather: {}})

    return store.dispatch(getForecast())
        .then((forecast) => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(2);
            expect(expectedActions).toContainEqual({ type: WEATHER_REQUEST });
            expect(expectedActions).toContainEqual({ type: WEATHER_SUCCESS, forecast: { "london": "hot" } });
        })
});