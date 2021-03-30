import React from 'react'
import Tabs from './Tabs/Tabs'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { TabWrapper } from './styles'

const Login = () => {
  return (
    <TabWrapper>
      <Tabs>
        <div label="로그인">
          <LoginForm />
        </div>
        <div label="회원가입">
          <SignupForm />
        </div>
      </Tabs>
    </TabWrapper>
  )
}

export default Login
