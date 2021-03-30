import React, { useCallback, useEffect } from 'react'
import CommonBtn from '../../Button/CommonBtn'
import { useDispatch, useSelector } from 'react-redux'
import { LOG_OUT_REQUEST } from '../../../reducers/user'
import { useHistory } from 'react-router-dom'

const Mypage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { logOutDone } = useSelector(state => state.user)

  const onLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    })
  }, [])

  useEffect(() => {
    if (logOutDone) {
      history.replace('/')
    }
  }, [logOutDone])

  return (
    <CommonBtn size="small" onClick={onLogOut}>
      로그아웃
    </CommonBtn>
  )
}

export default Mypage
