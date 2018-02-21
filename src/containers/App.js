import React from 'react'
import WeatherContainer from './Weather'
import MessagesContainer from './Messages'

const App = () => (
  <div className="container">
    <h1>Tandem Weather</h1>
    <WeatherContainer />
    <MessagesContainer />
  </div>
)

export default App

