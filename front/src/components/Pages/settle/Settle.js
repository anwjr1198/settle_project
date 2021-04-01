import React, {useState} from 'react'
import SettleList from './SettleList'
import useInput from '../../hooks/useInput'
import {
  SettleWrapper,
  SettleMakeBox,
  SettleMakeBoxItem,
  SettleMakeBoxInput,
  SettleMakeBoxTitleInput,
  PlusIcon,
  SettleBoxHideIcon,
  SettleMember,
  SettleMemberItem,
  SelectNumber,
  SettleResetBtn,
  SettleFinalBtn,
} from './styles'
import CommonBtn from '../../Button/CommonBtn'

// import {FaPlus, FaChevronDown} from 'react-icons/fa'

const Settle = () => {
  const [meetTitle, onChangeMeetTitle, setMeetTitle] = useInput('')
  const [memberInput, onChangeInput, setMemberInput] = useInput('')

  const [meetMember, setMeetMember] = useState([])
  const [selectNumber, onChangeSelect] = useInput('선택')

  const onAddMember = () => {
    setMeetMember([...meetMember.concat(memberInput)])
    setMemberInput('')
  }

  const onSettleReset = () => {
    setMeetTitle('')
    setMemberInput('')
    setMeetMember([])
  }

  const onMemberRemove = e => {
    console.log(e.target.index)
    console.log('인덱스', meetMember.indexOf[2])
    let delete_target = meetMember
    console.log(delete_target)
  }

  return (
    <SettleWrapper>
      <SettleMakeBox>
        <SettleMakeBoxItem>
          <p> 모임이름</p>
          <SettleMakeBoxTitleInput
            type="text"
            value={meetTitle}
            onChange={onChangeMeetTitle}
          />
          {/* <SettleBoxHideIcon /> */}
        </SettleMakeBoxItem>
        <SettleMakeBoxItem>
          <p> 참석자 이름</p>
          <SettleMakeBoxInput
            type="text"
            value={memberInput}
            onChange={onChangeInput}
          />
          <PlusIcon onClick={onAddMember} />
        </SettleMakeBoxItem>

        <SettleMember>
          {meetMember.map((member, index) => {
            return (
              <SettleMemberItem onClick={onMemberRemove} key={index}>
                {member}
              </SettleMemberItem>
            )
          })}
        </SettleMember>

        <SelectNumber>
          모임 차수 선택
          <select onChange={onChangeSelect}>
            <option>선택</option>
            <option>1차</option>
            <option>2차</option>
            <option>3차</option>
            <option>4차</option>
            <option>5차</option>
            <option>6차</option>
          </select>
          <SettleResetBtn onClick={onSettleReset}>초기화</SettleResetBtn>
        </SelectNumber>
      </SettleMakeBox>

      <SettleList title={meetTitle} member={meetMember} number={selectNumber} />

      <SettleFinalBtn size="mid">최종결산</SettleFinalBtn>
    </SettleWrapper>
  )
}

export default Settle
