import styled, {keyframes} from 'styled-components'
import {FaPlus, FaChevronDown} from 'react-icons/fa'
import CommonBtn from '../../Button/CommonBtn'
import {BsPencilSquare} from 'react-icons/bs'
import {MdClose} from 'react-icons/md'

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
export const CloseIcon = styled(MdClose)`
  color: #ff9e7d;
  font-weight: bold;
  margin-left: 3px;
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
export const SettleCompleteBtn = styled.span`
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

// 정산목록시작
export const SettleListWrapper = styled.div`
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 3px 3px 3px darkgray;
  background: #faf4f2;
  padding: 10px 20px 20px 20px;
  margin-bottom: 30px;
`
export const SettleListItem = styled.div``
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
  font-size: 27px;
  color: #ff9e7d;
`
export const SettleListMember = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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
