import React, {useCallback, useEffect, useState} from 'react'
import useInput from '../../hooks/useInput'
import CommonBtn from '../../Button/CommonBtn'
import {FormWrapper, Input} from './styles'
import {SIGN_UP_REQUEST} from '../../../reducers/user'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Loading from '../../Loading'

const SignupForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {signUpDone, signUpLoading} = useSelector(state => state.user)
  const [email, onChangeEmail] = useInput('')
  const [nickname, onChangeNickname] = useInput('')
  const [password, onChangePassword] = useInput('')

  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value)
      setPasswordError(e.target.value !== password)
    },
    [password]
  )

  useEffect(() => {
    if (signUpDone === true) {
      window.location.replace('/login')
    }
  }, [signUpDone])

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      if (password !== passwordCheck) {
        return setPasswordError(true)
      }
      dispatch({
        type: SIGN_UP_REQUEST,
        data: {email, nickname, password},
      })
    },
    [email, nickname, password, passwordCheck]
  )

  return (
    <FormWrapper onSubmit={onSubmit}>
      <Input
        type="text"
        name="nickname"
        placeholder="닉네임"
        value={nickname}
        onChange={onChangeNickname}
      />

      <Input
        type="email"
        name="email"
        placeholder="이메일 주소"
        value={email}
        onChange={onChangeEmail}
      />

      <Input
        type="password"
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={onChangePassword}
      />

      <Input
        type="password"
        name="password-check"
        placeholder="비밀번호 확인"
        value={passwordCheck}
        onChange={onChangePasswordCheck}
      />
      {passwordError && <p>비밀번호가 일치하지 않습니다.</p>}

      <br />
      <br />
      <CommonBtn size="large" type="submit">
        {signUpLoading ? <Loading /> : '회원가입'}
      </CommonBtn>
    </FormWrapper>
  )
}

export default SignupForm
