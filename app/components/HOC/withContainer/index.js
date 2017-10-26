import React, {Component, isValidElement} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import withRoutes from '../withSubRoutes';

export default (Wrapper, combinedMapTpProps = {}, combinedDispatchActions = {}, routes = []) => {
    if (!Array.isArray(routes)) {
        throw new Error('routes must be an Array')
    }

    if (isValidElement(Wrapper)) { // if was called as a component via <Wrapper />
        throw new Error('must pass functions to withContainerAndLayout')
    }

    return withRoutes(withRouter(connect(combinedMapTpProps, combinedDispatchActions)(Wrapper)), routes);
};