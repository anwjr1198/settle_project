import React, {useRef, useState, useCallback, useEffect} from 'react'
import SettleList from './SettleList'
import useInput from '../../hooks/useInput'
import {
  SettleWrapper,
  SettleMakeBox,
  SettleMakeBoxItem,
  SettleMakeBoxInput,
  SettleMakeBoxTitleInput,
  PlusIcon,
  SettleMember,
  SettleMemberItem,
  CloseIcon,
  SelectNumber,
  SettleCompleteBtn,
  SettleFinalBtn,
} from './styles'
import {useDispatch, useSelector} from 'react-redux'
import {MODAL_OPEN} from '../../../reducers/utils'
import AlertModal from '../../Modal/AlertModal'

const Settle = () => {
  const dispatch = useDispatch()
  const {modalStatus, modalContents} = useSelector(state => state.utils)

  useEffect(() => {
    if (modalStatus == true) {
      alert(modalContents)
    }
  }, [modalStatus])

  const [meetTitle, onChangeMeetTitle, setMeetTitle] = useInput('')
  const [memberInput, onChangeMemberInput, setMemberInput] = useInput('')
  const [members, setMembers] = useState([])
  const [selectNumber, onChangeSelect] = useInput('선택')
  const [addSettleList, SetSettleList] = useState(false)

  const nextId = useRef(0)

  const onAddMemberClick = useCallback(
    e => {
      if (memberInput.trim()) {
        const member = {
          id: nextId.current,
          value: memberInput,
        }
        setMembers(members.concat(member))
        setMemberInput('')
        nextId.current += 1
      }
    },
    [memberInput]
  )
  const onAddMemberEnter = useCallback(
    e => {
      if (e.keyCode === 13 && memberInput.trim()) {
        const member = {
          id: nextId.current,
          value: memberInput,
        }
        setMembers(members.concat(member))
        setMemberInput('')
        nextId.current += 1
      }
    },
    [memberInput]
  )

  const onMemberRemove = useCallback(
    id => {
      setMembers(members.filter(member => member.id !== id))
    },
    [members]
  )

  // const onSettleReset = () => {
  //   setMeetTitle('')
  //   setMemberInput('')
  //   setMembers([])
  // }

  const onAddSettleList = () => {
    console.log('버튼눌리')
    if (meetTitle && members.length !== 0 && selectNumber !== '선택') {
      SetSettleList(true)
    } else {
      dispatch({
        type: MODAL_OPEN,
        data: {
          status: true,
          contents: '값을 작성해주세요',
        },
      })
    }
  }

  const onSettleFinal = () => {
    console.log('눌림')
  }

  console.log(meetTitle, members.length, selectNumber)
  console.log(
    meetTitle && members.length !== 0 && selectNumber !== '선택'
      ? 'active'
      : 'inActive'
  )
  return (
    <SettleWrapper>
      <AlertModal show={modalStatus} />
      <SettleMakeBox>
        <SettleMakeBoxItem>
          <p> 모임이름</p>
          <SettleMakeBoxTitleInput
            type="text"
            value={meetTitle}
            onChange={onChangeMeetTitle}
            placeholder={'15자 이내로 작성'}
          />
        </SettleMakeBoxItem>
        <SettleMakeBoxItem>
          <p> 참석자 이름</p>
          <SettleMakeBoxInput
            type="text"
            value={memberInput}
            onChange={onChangeMemberInput}
            onKeyDown={onAddMemberEnter}
            placeholder={'입력후 Enter or Click'}
          />

          <PlusIcon onClick={onAddMemberClick} />
        </SettleMakeBoxItem>

        <SettleMember>
          {members.map((member, index) => {
            return (
              <SettleMemberItem
                onClick={() => onMemberRemove(member.id)}
                key={index}
              >
                {member.value}
                <CloseIcon />
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
          <SettleCompleteBtn
            active={
              meetTitle !== null &&
              members.length !== 0 &&
              selectNumber !== '선택'
                ? 'active'
                : 'inActive'
            }
            disabled={
              meetTitle !== null &&
              members.length !== 0 &&
              selectNumber !== '선택'
                ? false
                : true
            }
            onClick={onAddSettleList}
          >
            모임 추가
          </SettleCompleteBtn>
        </SelectNumber>
      </SettleMakeBox>

      {addSettleList ? (
        <SettleList title={meetTitle} number={selectNumber} />
      ) : (
        ''
      )}

      <SettleFinalBtn onClick={onSettleFinal} disabled="disabled" size="mid">
        최종결산
      </SettleFinalBtn>
    </SettleWrapper>
  )
}

export default Settle
