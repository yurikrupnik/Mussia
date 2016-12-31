import React from 'react';
import {Router, browserHistory} from 'react-router';
import {routes} from './rootRoute';
export default () => <Router history={browserHistory}>{routes}</Router>;