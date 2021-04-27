import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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
