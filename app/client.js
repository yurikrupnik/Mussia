import React, {Component} from 'react';
import 'flexboxgrid'; // load flexbox for grid system
import './styles/custom-styles.scss';

import './services/socket/client'; // connect to socket client
import AppWrapper from './Wrappers/App';
import {render} from 'react-dom';
const ROOT = document.getElementById('root');

let renderToDOM = (initialState = window.__PRELOADED_STATE__) => render(<AppWrapper initialState={initialState}/>, ROOT);

renderToDOM();
