import styled, {keyframes} from 'styled-components'
import {FaPlus, FaChevronDown} from 'react-icons/fa'
import CommonBtn from '../../Button/CommonBtn'

const fadeIn = keyframes`
   from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const SettleWrapper = styled.div`
  padding-top: 20px;
  margin: 0 auto;
  text-align: center;
`
export const SettleMakeBox = styled.div`
  animation: ${fadeIn};
  animation-fill-mode: forwards;
  animation-duration: 1s;
  opacity: 0;
  width: 80%;
  margin: 0 auto;
  border-radius: 14px;
  box-shadow: 0px 0px 5px #c7bebe;
  background: #faf4f2;
  padding: 20px 15px 15px 20px;
  margin-bottom: 20px;
`

export const SettleMakeBoxItem = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 16px;
  text-align: left;
  & > p {
    display: inline;
  }
`

export const SettleMakeBoxTitleInput = styled.input`
  background: none;
  border: none;
  outline: none;
  border-bottom: 3px solid #ff9e7d;
  width: 40%;
  min-width: 150px;
  margin-left: 35px;
  color: gray;
  font-weight: 600;
  text-align: left;
  font-size: 16px;
`

export const SettleMakeBoxInput = styled.input`
  background: none;
  border: none;
  font-size: 16px;
  outline: none;
  border-bottom: 3px solid #ff9e7d;
  width: 20%;
  min-width: 150px;
  margin-left: 15px;
  color: gray;
  font-weight: 600;
  text-align: left;
`
export const PlusIcon = styled(FaPlus)`
  color: #ff9e7d;
  border-radius: 14px;
  box-shadow: 0px 0px 5px #ff9e7d;
  padding: 3px;
  font-size: 22px;
  margin-bottom: -5px;
  margin-left: 15px;
  cursor: pointer;
`
export const SettleBoxHideIcon = styled(FaChevronDown)`
  font-size: 22px;
  margin-bottom: -5px;
  cursor: pointer;
  float: right;
`
export const SettleMember = styled.div`
  margin-bottom: 10px;
  /* border: 1px solid black; */
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
export const SettleMemberItem = styled.div`
  border-radius: 5px;
  border: 2px solid #ff9e7d;
  padding: 3px 3px 3px 3px;
  font-size: 13px;
  margin-right: 5px;
  font-weight: bold;
`

export const SelectNumber = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 16px;
  text-align: left;

  & > select {
    font-weight: bold;
    width: 100px;
    margin-left: 7%;
    padding: 4px 4px;
    background: none;
    border-radius: 5px;
    border: 2px solid #a19f9e;
    text-indent: 5px;
    color: #a19f9e;

    option {
      color: black;
    }
  }
`
export const SettleResetBtn = styled.span`
  background: none;
  padding: 3px 6px;
  margin-top: 1px;
  float: right;
  cursor: pointer;
  border: 2px solid #ff9e7d;
  border-radius: 5px;
  font-size: 13px;

  color: black;
`
export const SettleListWrapper = styled.div`
  animation: ${fadeIn};
  animation-fill-mode: forwards;
  animation-duration: 1s;
  opacity: 0;
  width: 80%;
  margin: 0 auto;
  border-radius: 14px;
  box-shadow: 0px 0px 5px #c7bebe;
  background: #faf4f2;
  padding: 10px 15px 10px 15px;
  margin-bottom: 30px;
`
export const SettleItem = styled.div``
export const SettleHeader = styled.div`
  margin-bottom: 15px;
  display: flex;
  & > p {
    font-weight: bold;
    font-size: 14px;
  }
`
export const SettleNumber = styled.div`
  font-weight: 400;
  box-shadow: 3px 3px 5px 1px #ff9e7d;
  margin-right: 10px;
  font-size: 15px;
  & > span {
    font-size: 17px;
    color: #ff9e7d;
    font-weight: bold;
  }
`
export const SettleWriteBtn = styled.div`
  float: right;
`
export const SettleFinalBtn = styled(CommonBtn)`
  padding: 0 20px 0 20px;
  width: 70%;
`
