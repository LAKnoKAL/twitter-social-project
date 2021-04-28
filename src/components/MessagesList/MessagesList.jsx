import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import {
  makeStyles,
  Grid,
  Container,
  List,
  Divider,
  Typography
} from '@material-ui/core'

import MessagesItem from '../MessagesItem'

import { getSortedMessages } from '../../store/reducers/messages'

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  list: {
    width: '100%'
  }
}))

const MessagesList = () => {
  const classes = useStyles()

  const messages = useSelector(getSortedMessages)

  return (
    <Container>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        {/* necessary for content to be below app bar */}
        <div className={classes.toolbar} />

        <List className={classes.list}>
          {messages.map(message => (
            <Fragment key={`message-${message.id}`}>
              <Divider />
              <MessagesItem message={message} />
              <Divider />
            </Fragment>
          ))}
        </List>

        {!messages.length && (
          <Typography variant="h6" >No tweets here yet</Typography>
        )}
      </Grid>
    </Container>
  )
}

export default MessagesList
