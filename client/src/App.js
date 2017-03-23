import React, { Component } from 'react';
import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';
import TopBar from './components/TopBar';
import AlbumsContainer from './components/AlbumsContainer';
import MatchWhenLoggedIn from './components/MatchWhenLoggedIn';
import Login from './components/Login';
import Logout from './components/Logout';

import './App.css';

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
      <MatchWhenLoggedIn pattern='/albums' component={AlbumsContainer}/>
      <Match pattern='/login' component={Login}/>
      <Match pattern='/logout' component={Logout}/>
      <Match exactly pattern='/' render={() => (
      	<Redirect to='/albums' />
      )} />
    </div>
  </div>
);

export default App;
