import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { format } from 'date-fns'

import {
  Button,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core'

import { setSelectedMessage, deleteMessage } from '../../store/actions/messages'

const MessagesItem = ({ message, setSelectedMessage, deleteMessage }) => {
  const handleEditMessage = useCallback(() => {
    setSelectedMessage(message.id)
  }, [setSelectedMessage, message])

  const handleMessageDelete = useCallback(() => {
    deleteMessage(message.id)
  }, [deleteMessage, message])

  const formattedDateTime = format(message.dateTime, 'MM/dd/yyyy HH:mm')

  return (
    <ListItem>
      <ListItemText primary={`${message.title || message.id} - ${formattedDateTime}`} />
      <ListItemSecondaryAction>
        <Button color="primary" onClick={handleEditMessage}>
          Edit
        </Button>
        <Button color="secondary" onClick={handleMessageDelete}>
          Delete
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

const mapDispatchToProps = {
  setSelectedMessage,
  deleteMessage
}

export default connect(null, mapDispatchToProps)(MessagesItem)
