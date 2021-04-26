import { SCHEDULE_MESSAGE } from '../actions/messages'

const initialState = {
  messages: [],
}

export const getMessages = (state) => state.messages

export default (state = initialState, action) => {
  switch (action.type) {
    case SCHEDULE_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload
        ]
      }
    }
    default:
      return state
  }
}
