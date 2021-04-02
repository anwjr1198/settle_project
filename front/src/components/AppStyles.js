import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

li{
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
html,body{
  overflow-x:hidden;
}
`
export const AppWarpper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  padding: 15px 15px 10px 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
