import React, {Component} from 'react';
import {render} from 'react-dom';
import 'flexboxgrid'; // load flexbox for grid system
import './styles/custom-styles.scss';
import './services/socket/client'; // connect to socket client

import Wrapper from './redux/store/wrapper';
// import Router from './Router/Router';
// import Material from './Wrappers/Material'

let initialState = window.__PRELOADED_STATE__;
// console.log('state', JSON.parse(state));

// todo get the initial stare here and pass it!!
/*initialState={{counter: 2001}}*/
render(<Wrapper initialState={initialState} />, document.getElementById('root'));
