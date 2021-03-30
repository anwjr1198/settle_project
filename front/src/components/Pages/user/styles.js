import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
   from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const TabWrapper = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-fill-mode: backwards;
  border-radius: 10px;
  box-shadow: 0px 0px 0px 2.5px #ffd5b4;
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;
`

export const FormWrapper = styled.form`
  height: 45vh;
`

export const Input = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid #d9d9d9;
  padding: 13px;
  margin: 10px 0px;
  font-size: 14px;
`
