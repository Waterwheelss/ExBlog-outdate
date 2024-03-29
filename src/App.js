import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Navbar from './pages/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PageEditPage from './pages/PostEditPage'
import { useSelector } from 'react-redux'
import { selectUser } from './features/user/userSlice'

function App() {
  const user = useSelector(selectUser)
  return user.isLoaded ? (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/page/edit/:pageId" component={PageEditPage} />
    </Router>
  ) : null;
}

export default App;
