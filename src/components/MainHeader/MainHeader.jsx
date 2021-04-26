import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const MainHeader = () => {
  return (
    <AppBar
      position="fixed"
      // className={classes.appBar}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Messages List
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default MainHeader
