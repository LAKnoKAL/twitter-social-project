import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

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
