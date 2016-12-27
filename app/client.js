import React, {Component} from 'react';
import {render} from 'react-dom';
import Wrapper from './redux/store/wrapper';
import 'flexboxgrid'; // load flexbox for grid system
import './services/socket/client'; // connect to socket client

render(<Wrapper />, document.getElementById('root'));