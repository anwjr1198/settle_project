import React, {useCallback, useEffect} from 'react'
import CommonBtn from '../../Button/CommonBtn'
import {useDispatch, useSelector} from 'react-redux'
import {LOG_OUT_REQUEST} from '../../../reducers/user'
import {CHANGE_PAGEINDEX} from '../../../reducers/utils'
import {useHistory} from 'react-router-dom'

const Mypage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {me} = useSelector(state => state.user)

  const onLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    })
    dispatch({
      type: CHANGE_PAGEINDEX,
      data: 1,
    })
    localStorage.setItem('pageIndex', 1)
  }, [])

  useEffect(() => {
    if (me == null) {
      history.replace('/')
    }
  }, [me])

  return (
    <CommonBtn size="small" onClick={onLogOut}>
      ๋ก๊ทธ์์
    </CommonBtn>
  )
}

export default Mypage
