export const convertKelvinToCelsius = (temperature) => Math.round(temperature - 273.15)

export const getTime = (date) => new Date(date).toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric' })

export const getDate = (date) => new Date(date).toDateString()
