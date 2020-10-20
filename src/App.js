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


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={LoginPage}/>
    </Router>
  );
}

export default App;
