import React from 'react'
import {
  SettleListWrapper,
  SettleItem,
  SettleHeader,
  SettleNumber,
  SettleMember,
  SettleMemberItem,
} from './styles'

const SettleList = ({title, member, number}) => {
  return (
    <SettleListWrapper>
      <SettleItem>
        <SettleHeader>
          <SettleNumber>
            <span>#</span>
            {number}
          </SettleNumber>
          <p>{title}</p>
          <div>Icon</div>
        </SettleHeader>

        <SettleMember>
          {member.map((value, index) => (
            <SettleMemberItem key={index}>{value}</SettleMemberItem>
          ))}
        </SettleMember>
      </SettleItem>
    </SettleListWrapper>
  )
}

export default SettleList
