import { all } from 'redux-saga/effects'

// import messagesSagas from './messagesSagas'

export default function* rootSaga() {
  yield all([
    // ...messagesSagas,
  ])
}
