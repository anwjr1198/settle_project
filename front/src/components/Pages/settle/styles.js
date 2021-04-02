import styled, {keyframes, css} from 'styled-components'
import {FaPlus} from 'react-icons/fa'
import CommonBtn from '../../Button/CommonBtn'
import {BsPencilSquare} from 'react-icons/bs'
import {MdClose} from 'react-icons/md'
import {GrPowerReset} from 'react-icons/gr'

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
  width: 70%;
  animation: ${fadeIn};
  animation-fill-mode: forwards;
  animation-duration: 1.3s;
  opacity: 0;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
export const SettleMakeBox = styled.div`
  margin: 0 auto;
  border-radius: 14px;
  box-shadow: 0px 0px 5px #c7bebe;
  background: #faf4f2;
  padding: 20px 15px 15px 20px;
  margin-bottom: 30px;
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
  width: 35%;
  min-width: 150px;
  margin-left: 35px;
  color: gray;
  font-weight: 600;
  text-align: left;
  font-size: 16px;
  ::placeholder {
    font-size: 13px;
    color: silver;
  }
`
export const SettleMakeBoxInput = styled.input`
  background: none;
  border: none;
  font-size: 16px;
  outline: none;
  border-bottom: 3px solid #ff9e7d;
  width: 15%;
  min-width: 150px;
  margin-left: 14px;
  color: gray;
  font-weight: 600;
  text-align: left;

  ::placeholder {
    font-size: 13px;
    color: silver;
  }
`

export const ResetBtn = styled(GrPowerReset)`
  color: #ff9e7d;
  font-size: 30px;
  cursor: pointer;
  float: right;
  padding: 7px 7px 0 0;
`

export const PlusBtn = styled(FaPlus)`
  color: #ff9e7d;
  border-radius: 14px;
  box-shadow: 0px 0px 5px #ff9e7d;
  padding: 3px;
  font-size: 22px;
  margin-bottom: -5px;
  margin-left: 5px;
  cursor: pointer;
`
export const CloseBtn = styled(MdClose)`
  color: #ff9e7d;
  font-weight: bold;
  margin-left: 3px;
`
export const SettleMember = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
export const SettleMemberItem = styled.div`
  border-radius: 5px;
  box-shadow: 2px 2px 1px #ff9e7d;
  padding: 4px 4px;
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
    width: 90px;
    margin-left: 5%;
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
export const SettleCompleteBtn = styled.button`
  background: none;
  padding: 3px 6px;
  margin-top: 1px;
  float: right;
  border: 2px solid silver;
  border-radius: 5px;
  font-size: 13px;
  color: silver;
  cursor: pointer;
  outline: none;

  ${props =>
    props.active === 'active' &&
    css`
      border: 2px solid #ff9e7d;
      color: black;
      background: none;
      font-weight: bold;
    `};
`

// 정산목록시작
export const SettleListItem = styled.div`
  background: #faf4f2;
  margin: 0 auto 20px;
  padding: 15px 13px 12px 13px;
  width: 97%;
  border-radius: 5px;
  box-shadow: 3px 3px 3px darkgray;
`
export const SettleListHeader = styled.div`
  margin-bottom: 15px;
  text-align: left;
  & > p {
    font-weight: bold;
    font-size: 14px;
  }
`
export const SettleListNumber = styled.span`
  font-weight: bold;
  box-shadow: 0px 0px 5px #ff9e7d;
  margin-right: 10px;
  padding: 4px 9px 4px 3px;
  font-size: 14px;

  & > span {
    font-size: 17px;
    color: #ff9e7d;
    font-weight: bold;
  }
`
export const SettleListTitle = styled.span`
  font-weight: bold;
  text-align: left;
  font-size: 16px;
`
export const SettleListWriteBtn = styled(BsPencilSquare)`
  float: right;
  font-size: 25px;
  color: #ff9e7d;
`
export const SettleRemoveBtn = styled(MdClose)`
  font-size: 28px;
  cursor: pointer;
  float: right;
  padding: 0 7px 0 0;
`
export const SettleListMember = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  width: 88%;
`

export const SettleListMemberItem = styled.div`
  border-radius: 5px;
  padding: 3px 3px 3px 3px;
  font-size: 12px;
  margin-right: 5px;
  font-weight: bold;
  border: 2px solid silver;
  color: silver;
`
export const SettleFinalBtn = styled(CommonBtn)`
  padding: 0 20px 0 20px;
`
