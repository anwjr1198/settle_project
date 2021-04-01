import React from 'react'
// import { CommonBtnWrapper } from './styles'
import styled, {css} from 'styled-components'

const CommonBtnWrapper = styled.button`
  font-size: 15px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border: none;
  background: rgb(255, 158, 125);
  background: linear-gradient(
    90deg,
    rgba(255, 158, 125, 1) 0%,
    rgba(254, 166, 102, 1) 50%,
    rgba(250, 201, 99, 1) 100%
  );
  color: white;
  text-align: center;
  height: 40px;
  border-radius: 5px;

  ${props =>
    props.size === 'large' &&
    css`
      width: 100%;
    `}
  ${props =>
    props.size === 'mid' &&
    css`
      width: 80%;
    `}

  ${props =>
    props.size === 'small' &&
    css`
      width: 30%;
    `}

    
  :hover {
    color: white;
    background-color: #ff9e7d;
    transition: all 0.4s ease-in-out;
  }
`

const CommonBtn = ({children, size, onClick}) => {
  return (
    <CommonBtnWrapper onClick={onClick} size={size}>
      {children}
    </CommonBtnWrapper>
  )
}

export default CommonBtn
