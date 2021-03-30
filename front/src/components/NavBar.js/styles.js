import styled from 'styled-components'

export const NavBarWrapper = styled.ul`
  display: flex;
  margin-left: 10px;
`
export const NavBarItem = styled.li`
  text-decoration: none;
  margin-right: 15px;
  max-width: 80px;
  margin-bottom: 20px;

  & > a {
    color: ${props => (props.tabIndex ? '#ff9e7d' : '#a19f9e')};
    font-weight: ${props => (props.tabIndex ? '700' : '500')};
    border-bottom: ${props => (props.tabIndex ? '4px solid #ff9e7d' : '')};
    font-size: 19px;
  }
  a:hover {
    color: #ff9e7d;
    font-weight: 700;
    transition: all 0.2s ease-in;
    border-bottom: 4px solid #ff9e7d;
  }
`
