import React, { Component } from 'react';
import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';
import TopBar from './components/TopBar';
import AlbumsContainer from './components/AlbumsContainer';
import Login from './components/Login';

import './App.css';

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
      <Match pattern='/albums' component={AlbumsContainer}/>
      <Match pattern='/login' component={Login}/>
      <Match exactly pattern='/' render={() => (
      	<Redirect to='/albums' />
      )} />
    </div>
  </div>
);

export default App;
