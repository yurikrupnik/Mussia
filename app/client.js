import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './components/views/App/index';
import './services/node/socket/client'; // connect to socket client
import './styles/vars.scss';
import './styles/custom-styles.scss';
import 'flexboxgrid'; // load flexbox for grid system

const root = document.getElementById('root');

hydrate(<BrowserRouter>
    <App userAgent={global.navigator.userAgent} initialState={global.window.__PRELOADED_STATE__}/>
</BrowserRouter>, root);
