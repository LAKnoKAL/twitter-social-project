import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'

import { setMessagesDialogState } from '../../store/actions/messages'

const MainHeader = ({ setMessagesDialogState }) => {
  const handleOpenDialog = useCallback(() => {
    setMessagesDialogState(true)
  }, [setMessagesDialogState])

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap>
            Messages List
          </Typography>

          <Button color="inherit" onClick={handleOpenDialog}>
            Schedule New Tweet
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

const mapDispatchToProps = {
  setMessagesDialogState
}

export default connect(null, mapDispatchToProps)(MainHeader)
