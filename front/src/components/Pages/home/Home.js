import React, {useCallback} from 'react'
import {
  HomeWarpper,
  HomeItem,
  HomeTitle,
  UserSettleInfo,
  UserSettleInfoItem,
  SettleDirectBtn,
} from './styles'
import {FaChevronRight} from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {CHANGE_PAGEINDEX} from '../../../reducers/utils'

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {me} = useSelector(state => state.user)

  const onSettleDirect = useCallback(() => {
    history.push('/settle')
    localStorage.setItem('pageIndex', 2)
    dispatch({
      type: CHANGE_PAGEINDEX,
      data: 2,
    })
  }, [])

  return (
    <HomeWarpper>
      {me ? (
        <>
          <HomeItem index={4}>
            안녕하세요 <span>,</span>
          </HomeItem>
          <HomeItem index={5}>{me}</HomeItem>
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

      <SettleDirectBtn onClick={onSettleDirect}>
        <p>정산 바로가기</p>
        <span>
          <FaChevronRight />
        </span>
      </SettleDirectBtn>
    </HomeWarpper>
  )
}

export default Home
