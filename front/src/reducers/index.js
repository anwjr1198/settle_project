import { combineReducers } from 'redux'
import user from './user'

const rootReducer = (state, action) => {
  switch (action.type) {
    default: {
      const combinedReducer = combineReducers({
        user,
      })
      return combinedReducer(state, action)
    }
  }
}

export default rootReducer
