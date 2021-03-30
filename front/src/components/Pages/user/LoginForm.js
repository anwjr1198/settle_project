import React, { useCallback, useEffect } from 'react'
import useInput from '../../hooks/useInput'
import { FormWrapper, Input } from './styles'
import CommonBtn from '../../Button/CommonBtn'
import { LOG_IN_REQUEST } from '../../../reducers/user'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Loading from '../../Loading'

const LoginForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { me, logInDone, logInLoading } = useSelector(state => state.user)
  const [email, onChangeEmail] = useInput('')
  const [password, onChangePassword] = useInput('')

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault()
      dispatch({
        type: LOG_IN_REQUEST,
        data: { email, password },
      })
    },
    [email, password]
  )

  useEffect(() => {
    if (logInDone) {
      localStorage.setItem('email', email)
      localStorage.setItem('nickname', me)
      history.replace('/')
    }
  }, [logInDone])

  return (
    <FormWrapper onSubmit={onSubmitForm}>
      <Input
        type="email"
        name="email"
        placeholder="이메일 주소"
        value={email}
        onChange={onChangeEmail}
      />
      <br />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={onChangePassword}
      />

      <br />
      <br />

      <CommonBtn size="large" type="submit">
        {logInLoading ? <Loading /> : '로그인'}
      </CommonBtn>
    </FormWrapper>
  )
}

export default LoginForm
