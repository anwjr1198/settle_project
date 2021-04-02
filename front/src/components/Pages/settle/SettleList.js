import React from 'react'
import {
  SettleListItem,
  SettleListHeader,
  SettleListNumber,
  SettleListTitle,
  SettleListWriteBtn,
  SettleRemoveBtn,
  SettleListMember,
  SettleListMemberItem,
} from './styles'
import {useDispatch, useSelector} from 'react-redux'
import {REMOVE_SETTLELIST} from '../../../reducers/settle'

const SettleList = () => {
  const dispatch = useDispatch()
  const {settleList} = useSelector(state => state.settle)

  const onRemoveSettleList = id => {
    dispatch({
      type: REMOVE_SETTLELIST,
      data: id,
    })
  }

  return (
    <>
      {settleList.map(settle => (
        <div key={settle.id}>
          <SettleRemoveBtn
            onClick={() => {
              onRemoveSettleList(settle.id)
            }}
          />
          <SettleListItem>
            <SettleListHeader>
              <SettleListNumber>
                <span>#</span>
                {settle.settleNumber}
              </SettleListNumber>
              <SettleListTitle>{settle.settleTitle}</SettleListTitle>
            </SettleListHeader>
            <SettleListWriteBtn />
            <SettleListMember>
              {settle.settleMember.map(member => (
                <SettleListMemberItem key={member.id}>
                  {member.value}
                </SettleListMemberItem>
              ))}
            </SettleListMember>
          </SettleListItem>
        </div>
      ))}
    </>
  )
}

export default SettleList
