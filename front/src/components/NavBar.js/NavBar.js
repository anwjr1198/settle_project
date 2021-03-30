import React, { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavBarWrapper, NavBarItem } from './styles'

const NavBar = () => {
  const [activeTab, setActiveTab] = useState(1)

  // TODO : redux로 page index를 공유해야함
  const onClickTab = useCallback((e, index) => {
    e.preventDefault()
    setActiveTab(index)
  }, [])

  return (
    <>
      <NavBarWrapper>
        <NavBarItem
          tabIndex={activeTab === 1 ? 'active' : ''}
          onClick={e => {
            onClickTab(e, 1)
          }}
        >
          <Link to="/">홈</Link>
        </NavBarItem>
        <NavBarItem
          tabIndex={activeTab === 2 ? 'active' : ''}
          onClick={e => {
            onClickTab(e, 2)
          }}
        >
          <Link to="/settle">정산하기</Link>
        </NavBarItem>
        <NavBarItem
          tabIndex={activeTab === 3 ? 'active' : ''}
          onClick={e => {
            onClickTab(e, 3)
          }}
        >
          <Link to="/history">히스토리</Link>
        </NavBarItem>
        <NavBarItem
          tabIndex={activeTab === 4 ? 'active' : ''}
          onClick={e => {
            onClickTab(e, 4)
          }}
        >
          <Link to="/account">계좌관리</Link>
        </NavBarItem>
      </NavBarWrapper>
    </>
  )
}

export default NavBar
