import { combineReducers } from 'redux'

import messages from './messages'

// export * from '../selectors'

export default () =>
  combineReducers({
    messages,
  })
