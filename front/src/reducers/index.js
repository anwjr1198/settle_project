import {combineReducers} from 'redux'
import user from './user'
import utils from './utils'

const rootReducer = (state, action) => {
  switch (action.type) {
    default: {
      const combinedReducer = combineReducers({
        utils,
        user,
      })
      return combinedReducer(state, action)
    }
  }
}

export default rootReducer
