import React, { useEffect } from 'react'
import { HeaderWarpper, LogoWarpper } from './styles'
import { Link } from 'react-router-dom'
import LoginBtn from '../Button/LoginBtn'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user'

const Header = () => {
  const dispatch = useDispatch()
  const { me, logInDone } = useSelector(state => state.user)

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    })
  }, [])

  return (
    <HeaderWarpper>
      <LogoWarpper>
        <img src="/img/logo.png" alt="logo" />
      </LogoWarpper>

      {me ? (
        <Link to="/mypage">
          <LoginBtn title="내정보" />
        </Link>
      ) : (
        <Link to="/login">
          <LoginBtn title="로그인" />
        </Link>
      )}
    </HeaderWarpper>
  )
}

export default Header
