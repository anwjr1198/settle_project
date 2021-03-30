import styled, { keyframes } from 'styled-components'

export const HeaderWarpper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 25px;
`

const logoRotate = keyframes`
  100% {
   transform: rotate(360deg);
  }
`
export const LogoWarpper = styled.div`
  & > img {
    width: 60px;
    height: 45px;
    animation: ${logoRotate} 1.2s linear;
    animation-iteration-count: 2;
  }

  & > span {
    font-size: 30px;
    font-weight: 600;
    vertical-align: top;
  }
`
