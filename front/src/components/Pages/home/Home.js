import React from 'react'
import {
  HomeWarpper,
  HomeItem,
  HomeTitle,
  UserSettleInfo,
  UserSettleInfoItem,
  SettleDirectBtn,
} from './styles'
import { useSelector } from 'react-redux'

const Home = () => {
  const { me } = useSelector(state => state.user)

  return (
    <HomeWarpper>
      {me ? (
        <>
          <HomeItem index={4}>
            안녕하세요 <span>,</span>
          </HomeItem>
          <HomeItem index={5}>{me.nickname}</HomeItem>

          <UserSettleInfo>
            <UserSettleInfoItem>
              <div> 총 정산횟수</div>
              <span>N</span>회
            </UserSettleInfoItem>
            <UserSettleInfoItem>
              <div> 등록계좌 수</div>
              <span>N</span>/5개
            </UserSettleInfoItem>
          </UserSettleInfo>
        </>
      ) : (
        <>
          <HomeItem index={1}>
            쉽고 <span>,</span>
          </HomeItem>
          <HomeItem index={2}>
            빠르고 <span>,</span>
          </HomeItem>
          <HomeItem index={3}>
            정확하게 <span>.</span>
          </HomeItem>
          <HomeTitle>
            <img src="/img/logo.png" alt="logo" />
            N빵
          </HomeTitle>
        </>
      )}

      <SettleDirectBtn>정산 바로가기</SettleDirectBtn>
    </HomeWarpper>
  )
}

export default Home
