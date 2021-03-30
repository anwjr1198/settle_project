import styled, { css } from 'styled-components'

export const TabTitle = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 30px 30px 0px 30px;
  cursor: pointer;
`

export const TabItem = styled.li`
  border: 1px solid #d9d9d9;
  transition: all 0.5s ease-in-out;
  height: 40px;
  width: 50%;
  text-align: center;
  padding: 7px 0;
  font-size: 16px;
  :hover {
    font-size: 17px;
  }

  ${props => {
    if (props.activeTab === 'active') {
      return css`
        font-weight: bold;
        background-color: #ff9e7d;
        color: white;
        border: none;
        font-size: 17px;
      `
    }
  }}
`
export const TabContent = styled.div`
  padding: 1em 2em;
`
