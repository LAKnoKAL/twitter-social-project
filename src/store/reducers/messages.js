import { sortByDate } from '../../utils/sort'

import {
  SCHEDULE_MESSAGE,
  UPDATE_SCHEDULED_MESSAGE,
  DELETE_MESSAGE,
  SET_MESSAGES_DIALOG_STATE,
  SET_SELECTED_MESSAGE
} from '../actions/messages'

const initialState = {
  messages: [],
  isMessagesDialogOpened: false,
  selectedMessage: null
}

export const getMessagesState = (state) => state.messages
export const getMessages = (state) => getMessagesState(state).messages
export const getSortedMessages = (state) => getMessagesState(state).messages.sort(sortByDate)
export const getMessagesDialogState = (state) => getMessagesState(state).isMessagesDialogOpened
export const getSelectedMessage = (state) => getMessagesState(state).selectedMessage

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
    case UPDATE_SCHEDULED_MESSAGE: {
      return {
        ...state,
        messages: state.messages.map(message => (
          message.id === action.payload.id
            ? action.payload
            : message
        ))
      }
    }
    case DELETE_MESSAGE: {
      return {
        ...state,
        messages: state.messages.filter(message => message.id !== action.payload)
      }
    }
    case SET_MESSAGES_DIALOG_STATE: {
      return {
        ...state,
        isMessagesDialogOpened: action.payload
      }
    }
    case SET_SELECTED_MESSAGE: {
      return {
        ...state,
        selectedMessage: state.messages.find(message => message.id === action.payload)
      }
    }
    default:
      return state
  }
}
