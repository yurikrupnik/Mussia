// all routes will be wrapped in material provider
import React from 'react';
import {Router, browserHistory, RouterContext} from 'react-router';
import {routes} from '../../routes';
import Material from '../Material';

export default (props) => {
    // server render and client render - get the correct element
    let RoutesWrapper = global.window ?
        <Router history={browserHistory}>{routes}</Router> :
        <RouterContext {...props} />;
    return (
        <Material component={RoutesWrapper} />
    )
};
