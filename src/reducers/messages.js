import { ADD_MESSAGE } from '../actions/messages'

const messages = (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [
                action.message
            ]

        default:
            return state
    }
}

export default messages