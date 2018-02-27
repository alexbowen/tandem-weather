const api = {
    endpoint: 'http://api.openweathermap.org/data/2.5/forecast',
    interval: 8,
    mapping: interval => {
        return {
            time: interval.dt_txt,
            temp: interval.main.temp,
            weather: interval.weather[0]
        }
    }
}

export default api