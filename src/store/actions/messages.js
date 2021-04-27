import { createAction } from 'redux-actions'

export const SCHEDULE_MESSAGE = 'SCHEDULE_MESSAGE'
export const UPDATE_SCHEDULED_MESSAGE = 'UPDATE_SCHEDULED_MESSAGE'
export const SET_MESSAGES_DIALOG_STATE = 'SET_MESSAGES_DIALOG_STATE'
export const SET_SELECTED_MESSAGE = 'SET_SELECTED_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

export const scheduleMessage = createAction(SCHEDULE_MESSAGE)
export const updateScheduledMessage = createAction(UPDATE_SCHEDULED_MESSAGE)
export const setMessagesDialogState = createAction(SET_MESSAGES_DIALOG_STATE)
export const setSelectedMessage = createAction(SET_SELECTED_MESSAGE)
export const deleteMessage = createAction(DELETE_MESSAGE)
