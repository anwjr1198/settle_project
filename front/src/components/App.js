import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header/Header'
import NavBar from './NavBar.js/NavBar'
import { GlobalStyle, AppWarpper } from './AppStyles'
import Home from './Pages/home/Home'
import Mypage from './Pages/mypage/Mypage'
import Settle from './Pages/settle/Settle'
import History from './Pages/history/History'
import Account from './Pages/account/Account'
import Login from './Pages/user/Login'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWarpper>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/settle" component={Settle} />
          <Route exact path="/history" component={History} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </AppWarpper>
    </>
  )
}

export default App
