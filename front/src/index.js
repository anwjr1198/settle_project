import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()
const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(sagaMiddleware))
    : composeWithDevTools(applyMiddleware(sagaMiddleware))
const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga) // 루트 사가를 실행

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
