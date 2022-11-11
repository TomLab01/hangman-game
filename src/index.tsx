import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import HangmanPicture from './components/HangmanPicture';
import Toolbar from './components/Toolbar';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Toolbar />
    <HangmanPicture />
  </React.StrictMode>,
  document.getElementById('root'),
);
