import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/rootReducer'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = []

  middlewares.push(sagaMiddleware)
  const enhancers = composeWithDevTools({ trace: true })(
    applyMiddleware(...middlewares),
  )

  return createStore(rootReducer(), enhancers)
}

export default configureStore()
