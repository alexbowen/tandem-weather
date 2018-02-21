import { combineReducers } from 'redux'
import weather from './weather'
import messages from './messages'

const rootReducer = combineReducers({
    weather,
    messages
})

export default rootReducer