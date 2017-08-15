import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/Smart/App';
import 'flexboxgrid'; // load flexbox for grid system
import './styles/custom-styles.scss';
import './services/node/socket/client'; // connect to socket client
const app = document.getElementById('app');

render(<BrowserRouter><App initialState={window.__PRELOADED_STATE__}/></BrowserRouter>, app);
