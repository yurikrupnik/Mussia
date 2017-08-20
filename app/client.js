import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/Smart/App';
import 'flexboxgrid'; // load flexbox for grid system
import 'font-awesome/scss/font-awesome.scss' // load font awesome
import './styles/custom-styles.scss';
import './services/node/socket/client'; // connect to socket client
const root = document.getElementById('root');

render(<BrowserRouter><App initialState={window.__PRELOADED_STATE__}/></BrowserRouter>, root);
