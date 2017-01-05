import React, {Component} from 'react';
import {render} from 'react-dom';

import 'flexboxgrid'; // load flexbox for grid system
import './styles/custom-styles.scss';

import './services/socket/client'; // connect to socket client
import {renderToDOM} from './Router/render';

let initialState = window.__PRELOADED_STATE__;
console.log('window.__PRELOADED_STATE__', initialState);

renderToDOM(initialState);
