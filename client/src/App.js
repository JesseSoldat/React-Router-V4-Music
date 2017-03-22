import React, { Component } from 'react';
import Match from 'react-router/Match';
import TopBar from './components/TopBar';
import AlbumsContainer from './components/AlbumsContainer';

import './App.css';

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
      <Match pattern='/albums' component={AlbumsContainer} />
    </div>
  </div>
);

export default App;
