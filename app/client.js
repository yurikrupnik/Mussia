import React, {Component} from 'react';
import {render} from 'react-dom';
import Wrapper from './redux/store/wrapper';
import 'flexboxgrid'; // load flexbox for grid system
import './services/socket/client'; // connect to socket client

import App from './components/App/App';

// todo get the initial stare here and pass it!!
render(<App />, document.getElementById('root'));
{/*render(<Wrapper initialState={{counter: 2001}}/>, document.getElementById('root'));*/}