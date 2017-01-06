import React, {Component} from 'react';
// import {render} from 'react-dom';

import 'flexboxgrid'; // load flexbox for grid system
import './styles/custom-styles.scss';

import './services/socket/client'; // connect to socket client
import AppWrapper from './Wrappers/App';
import {render} from 'react-dom';

let renderToDOM = (initialState = window.__PRELOADED_STATE__) => {
    render(<AppWrapper state={initialState}/>, document.getElementById('root'));
};

renderToDOM();
