import styled, { keyframes, css } from 'styled-components'

const slideFromLeft = keyframes`
    from {
      left: -50%;
      opacity: 0;
    }
    to {
      left: 15px;
      opacity: 1;
    }
`
const slideFromRight = keyframes`
  from {
    right: -150%;
    opacity: 0;
  }
  to {
    right: -13px;
    opacity: 1;
}

`
const fadeIn = keyframes`
   from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const HomeWarpper = styled.div`
  margin-top: 30px;
`
export const HomeItem = styled.div`
  animation: ${slideFromLeft};
  animation-fill-mode: forwards;
  animation-duration: 1s;
  opacity: 0;
  margin-top: 5px;
  font-size: 33px;
  position: relative;
  font-weight: bold;

  & > span {
    color: #ff9e7d;
  }
  /* 비로그인 */
  ${props =>
    props.index === 1 &&
    css`
      animation-delay: 0;
    `}

  ${props =>
    props.index === 2 &&
    css`
      animation-delay: 500ms;
    `}

    ${props =>
    props.index === 3 &&
    css`
      animation-delay: 1000ms;
    `}

    /* 로그인 */
    ${props =>
    props.index === 4 &&
    css`
      font-size: 25px;
      animation-delay: 200ms;
      color: gray;
    `}
    ${props =>
    props.index === 5 &&
    css`
      animation: ${slideFromRight};
      animation-fill-mode: forwards;
      animation-duration: 1s;
      opacity: 0;
      animation-delay: 500ms;
    `}
`

export const UserSettleInfo = styled.div`
  display: flex;
  margin: 30px 0 20px 0;
  padding: 10px 0 10px 20px;
  animation: ${fadeIn};
  animation-fill-mode: forwards;
  animation-duration: 1s;
  opacity: 0;
  animation-delay: 1200ms;
`
export const UserSettleInfoItem = styled.div`
  font-size: 15px;
  color: #a19f9e;
  font-weight: bold;
  text-align: center;
  width: 30%;
  padding: 15px 0 15px 0;
  border-radius: 5px;
  margin-right: 40px;
  background-color: #faf4f2;
  box-shadow: 5px 5px 6px 2px #f0efef;
  margin-bottom: 4vh;

  & > span {
    font-size: 14px;
    color: #ff9e7d;
  }
`

export const HomeTitle = styled.div`
  animation: ${fadeIn};
  animation-delay: 1750ms;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  opacity: 0;
  font-size: 40px;
  margin-top: 30px;
  font-weight: bold;
  margin-left: 15px;

  & > img {
    animation: ${fadeIn} infinite linear;
    animation-duration: 2.2s;
    width: 50px;
    height: 35px;
    margin-right: 5px;
    vertical-align: center;
  }
`

export const SettleDirectBtn = styled.div`
  display: flex;
  justify-content: space-between;
  animation: ${fadeIn};
  animation-delay: 1750ms;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  opacity: 0;
  margin-top: 25vh;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  width: 94%;
  border-radius: 10px;
  padding: 10px 0px;
  text-indent: 20px;
  font-size: 20px;
  color: white;
  font-weight: bold;
  background: rgb(255, 158, 125);
  background: linear-gradient(
    90deg,
    rgba(255, 158, 125, 1) 0%,
    rgba(254, 166, 102, 1) 50%,
    rgba(250, 201, 99, 1) 100%
  );

  & > span {
    padding-right: 2%;
    color: black;
  }
`
