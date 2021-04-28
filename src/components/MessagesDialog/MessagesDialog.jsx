import React, { useCallback } from 'react'
import { connect, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { isPast } from 'date-fns'

import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { DateTimePicker } from 'formik-material-ui-pickers'

import {
  useMediaQuery,
  makeStyles,
  useTheme,

  Box,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core'

import {
  setMessagesDialogState,
  scheduleMessage,
  updateScheduledMessage,
  setSelectedMessage
} from '../../store/actions/messages'
import { getMessagesDialogState, getSelectedMessage } from '../../store/reducers/messages'

import { INITIAL_SCHEDULE_DATE } from '../../constants/dates'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between'
  },
  field: {
    padding: '10px 0'
  },
  actions: (props) => ({
    flexDirection: props.downSM ? 'column' : 'row'
  })
}))

const MessagesDialog = ({
  setMessagesDialogState,
  scheduleMessage,
  updateScheduledMessage,
  setSelectedMessage
}) => {
  const theme = useTheme()
  const downSM = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles({ downSM })

  const isMessagesDialogOpened = useSelector(getMessagesDialogState)
  const selectedMessage = useSelector(getSelectedMessage)

  const handleClose = useCallback(() => {
    setMessagesDialogState(false)
    // clear selected message in edit dialog to prevent from keep opened
    setSelectedMessage(null)
  }, [setMessagesDialogState])

  const handleSubmit = useCallback(values => {
    if (selectedMessage?.id) {
      updateScheduledMessage({
        ...selectedMessage,
        ...values
      })
    } else {
      scheduleMessage({ id: uuidv4(), ...values })
    }

    handleClose()
  }, [selectedMessage, updateScheduledMessage, setSelectedMessage, scheduleMessage])

  const handleValidation = useCallback(values => {
    const errors = {}

    if (!values.text) {
      errors.text = 'Required'
    } else if (values.text.length > 280) {
      errors.text = '280 Maximum amount of characters'
    }

    if (isPast(values.dateTime)) {
      errors.dateTime = 'Schedule date and time must be in future'
    }

    return errors
  }, [])

  return (
    <Dialog
      fullScreen={downSM}
      open={selectedMessage?.id || isMessagesDialogOpened}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      {/* Mobile dialog bar */}
      {downSM && (
        <>
          <AppBar>
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" noWrap>Schedule New Tweet</Typography>
              <Button color="inherit" onClick={handleClose}>
                Close
              </Button>
            </Toolbar>
          </AppBar>
          <div className={classes.toolbar} />
        </>
      )}

      {!downSM && (
        <DialogTitle>Schedule New Tweet</DialogTitle>
      )}

      <Formik
        initialValues={{
          title: selectedMessage?.title || '',
          text: selectedMessage?.text || '',
          dateTime: selectedMessage?.dateTime || INITIAL_SCHEDULE_DATE,
        }}
        validate={handleValidation}
        onSubmit={handleSubmit}
      >
        {({ submitForm, isSubmitting, values }) => (
          <Form autoComplete="off">
            <DialogContent>
              <Box className={classes.field}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Field
                    component={TextField}
                    name="title"
                    type="text"
                    label="Short title"
                    fullWidth={downSM}
                  />

                  <Field
                    component={DateTimePicker}
                    name="dateTime"
                    label="Date Time"
                    disablePast
                    fullWidth={downSM}
                  />
                </Grid>
              </Box>
              <Box className={classes.field}>
                <Field
                  component={TextField}
                  name="text"
                  type="text"
                  label="Text"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
                <FormHelperText id="my-helper-text">{values.text.length}/280</FormHelperText>
              </Box>
            </DialogContent>
            <DialogActions className={classes.actions}>
              <Button
                onClick={handleClose}
                color="primary"
                fullWidth={downSM}
              >
                Cancel
              </Button>
              <Button
                color="secondary"
                disabled={isSubmitting}
                onClick={submitForm}
                fullWidth={downSM}
              >
                Schedule Tweet
              </Button>
              {/* Disabled for MVP */}
              <Button
                onClick={handleClose}
                color="secondary"
                disabled
                fullWidth={downSM}
              >
                Tweet Immediately
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  )
}

const mapDispatchToProps = {
  setMessagesDialogState,
  scheduleMessage,
  updateScheduledMessage,
  setSelectedMessage
}

export default connect(null, mapDispatchToProps)(MessagesDialog)
