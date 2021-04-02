import {combineReducers} from 'redux'
import user from './user'
import utils from './utils'
import settle from './settle'

const rootReducer = (state, action) => {
  switch (action.type) {
    default: {
      const combinedReducer = combineReducers({
        utils,
        user,
        settle,
      })
      return combinedReducer(state, action)
    }
  }
}

export default rootReducer
