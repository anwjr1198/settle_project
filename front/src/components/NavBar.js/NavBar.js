import React, { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavBarWrapper, NavBarItem } from './styles'

const NavBar = () => {
  const navBarIndex = localStorage.getItem('pageIndex')
  const [activeTab, setActiveTab] = useState(parseInt(navBarIndex))

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
            localStorage.setItem('pageIndex', 1)
          }}
        >
          <Link to="/">홈</Link>
        </NavBarItem>
        <NavBarItem
          tabIndex={activeTab === 2 ? 'active' : ''}
          onClick={e => {
            onClickTab(e, 2)
            localStorage.setItem('pageIndex', 2)
          }}
        >
          <Link to="/settle">정산하기</Link>
        </NavBarItem>
        <NavBarItem
          tabIndex={activeTab === 3 ? 'active' : ''}
          onClick={e => {
            onClickTab(e, 3)
            localStorage.setItem('pageIndex', 3)
          }}
        >
          <Link to="/history">히스토리</Link>
        </NavBarItem>
        <NavBarItem
          tabIndex={activeTab === 4 ? 'active' : ''}
          onClick={e => {
            onClickTab(e, 4)
            localStorage.setItem('pageIndex', 4)
          }}
        >
          <Link to="/account">계좌관리</Link>
        </NavBarItem>
      </NavBarWrapper>
    </>
  )
}

export default NavBar
