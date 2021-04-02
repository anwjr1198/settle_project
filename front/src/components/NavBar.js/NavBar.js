import React, {useState, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {CHANGE_PAGEINDEX} from '../../reducers/utils'
import {NavBarWrapper, NavBarItem} from './styles'

const NavBar = () => {
  const dispatch = useDispatch()
  const navBarIndex = parseInt(localStorage.getItem('pageIndex'))
  const {pageIndex} = useSelector(state => state.user)
  const [activeTab, setActiveTab] = useState(
    pageIndex === navBarIndex ? pageIndex : navBarIndex
  )

  const onClickTab = useCallback((e, index) => {
    e.preventDefault()
    setActiveTab(index)
    localStorage.setItem('pageIndex', index)
    dispatch({
      type: CHANGE_PAGEINDEX,
      data: index,
    })
  }, [])

  return (
    <>
      <NavBarWrapper>
        <NavBarItem
          tabIndex={navBarIndex === 1 ? 'active' : ''}
          onClick={e => {
            onClickTab(e, 1)
          }}
        >
          <Link to="/">홈</Link>
        </NavBarItem>
        <NavBarItem
          tabIndex={navBarIndex === 2 ? 'active' : ''}
          onClick={e => {
            onClickTab(e, 2)
          }}
        >
          <Link to="/settle">정산하기</Link>
        </NavBarItem>
        <NavBarItem
          tabIndex={navBarIndex === 3 ? 'active' : ''}
          onClick={e => {
            onClickTab(e, 3)
          }}
        >
          <Link to="/history">히스토리</Link>
        </NavBarItem>
        <NavBarItem
          tabIndex={navBarIndex === 4 ? 'active' : ''}
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
