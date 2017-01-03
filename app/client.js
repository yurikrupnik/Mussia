import React, {Component} from 'react';
import {render} from 'react-dom';

import 'flexboxgrid'; // load flexbox for grid system
import './styles/custom-styles.scss';

import './services/socket/client'; // connect to socket client

import Wrapper from './redux/store/wrapper';
// import Router from './Router/Router';
// import Material from './Wrappers/Material'

let initialState = window.__PRELOADED_STATE__;

render(<Wrapper initialState={initialState} />, document.getElementById('root'));
