import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import 'flexboxgrid'; // load flexbox for grid system
import './styles/custom-styles.scss';
// import './services/node/socket/client'; // connect to socket client
import App from './components/Smart/App';
import {render} from 'react-dom';
const ROOT = document.getElementById('root');
render(<App initialState={window.__PRELOADED_STATE__}/>, ROOT);
