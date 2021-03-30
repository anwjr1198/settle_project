import { all, fork } from 'redux-saga/effects'
import userSaga from './user'
import axios from 'axios'
import { backUrl } from '../utils/config'

// 쿠키를 전송
axios.defaults.withCredentials = true
axios.defaults.baseURL = backUrl

export default function* rootSaga() {
  yield all([fork(userSaga)])
}
