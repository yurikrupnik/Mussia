import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/Smart/App';
import './services/node/socket/client'; // connect to socket client
const root = document.getElementById('root');

render(<BrowserRouter><App initialState={window.__PRELOADED_STATE__}/></BrowserRouter>, root);
