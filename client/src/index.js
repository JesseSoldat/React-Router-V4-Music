import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';
import App from './App';
import '../semantic/dist/semantic.css';
import './index.css';

ReactDOM.render(
	<Router>
  	<App />
  </Router>,
  document.getElementById('root')
);
