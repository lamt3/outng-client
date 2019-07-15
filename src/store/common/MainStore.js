import promise from 'redux-promise';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';

// import {rootReducer} from '../../reducers/RootReducer'

export function getStore(rootReducer, appMiddleware) {
  // Put any additional middleware here.
  // If we need to put in per-app middleware then we can add a middleware argument.
  let middlewares = [promise, thunk]

  // if (process.env.NODE_ENV === 'development') {
  //   const { logger } = require('redux-logger')
  //
  //   middlewares.push(logger)
  // }

  if (appMiddleware) {
    middlewares.concat(appMiddleware)
  }

  return createStore(
    rootReducer,
    (applyMiddleware(...middlewares))
  )
}

// const mainStore = getStore();
// export default mainStore;