import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getStateBySelector, createDispatcherByResource} from '../../services/client/crud/util';

export default (Resource, component) => {
    let {selector} = Resource;
    component.selector = selector;
    component.propTypes = {
        actions: PropTypes.object.isRequired,
        [selector]: PropTypes.object.isRequired,
    };

    return connect(
        getStateBySelector(selector),
        createDispatcherByResource(Resource))(component);
}
