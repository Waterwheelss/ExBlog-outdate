import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Navbar from './pages/Navbar'
import HomePage from './pages/HomePage'


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={HomePage}/>
      <Redirect to="/" />
    </Router>
  );
}

export default App;
