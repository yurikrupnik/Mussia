import React, {Component} from 'react';
import {render} from 'react-dom';
// import Wrapper from './redux/store/wrapper';
import 'flexboxgrid'; // load flexbox for grid system
import './services/socket/client'; // connect to socket client

import Router from './Router/Router';
// import Material from './Wrappers/Material'

// todo get the initial stare here and pass it!!
render(<Router />, document.getElementById('root'));
{/*render(<Wrapper initialState={{counter: 2001}}/>, document.getElementById('root'));*/
}