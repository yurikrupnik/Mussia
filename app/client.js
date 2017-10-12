import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/index';
import './services/node/socket/client'; // connect to socket client
import './styles/vars.scss';
import './styles/custom-styles.scss';
import 'flexboxgrid'; // load flexbox for grid system
const root = document.getElementById('root');
render(<BrowserRouter><App initialState={window.__PRELOADED_STATE__}/></BrowserRouter>, root);
