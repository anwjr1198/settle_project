import React from 'react'
import {
  SettleListWrapper,
  SettleListItem,
  SettleListHeader,
  SettleListNumber,
  SettleListTitle,
  SettleListWriteBtn,
  SettleListMember,
  SettleListMemberItem,
} from './styles'

const SettleList = ({title, member, number}) => {
  return (
    <SettleListWrapper>
      <SettleListItem>
        <SettleListHeader>
          <SettleListNumber>
            <span>#</span>
            {number}
          </SettleListNumber>
          <SettleListTitle>{title}</SettleListTitle>
          <SettleListWriteBtn>Icon</SettleListWriteBtn>
        </SettleListHeader>

        <SettleListMember>
          {/* {member.map((value, index) => (
            <SettleListMemberItem key={index}>{value}</SettleListMemberItem>
          ))} */}
        </SettleListMember>
      </SettleListItem>
    </SettleListWrapper>
  )
}

export default SettleList
