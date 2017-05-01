import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getStateBySelector, createDispatcherByResource} from './util';

export default (Resource, component) => {
    let {resource, selector, url} = Resource;
    component.selector = selector;
    component.propTypes = {
        actions: PropTypes.object.isRequired,
        [selector]: PropTypes.object.isRequired,
    };

    return connect(
        getStateBySelector(selector),
        createDispatcherByResource(resource))(component || Resource);
}