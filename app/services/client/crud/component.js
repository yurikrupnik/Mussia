import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getStateBySelector, createDispatcherByResource} from './util';

export default (component, com) => {
    let {resource, selector, url} = component;
    com.propTypes = {
        actions: PropTypes.object.isRequired,
        [selector]: PropTypes.object.isRequired,
    };

    return connect(
        getStateBySelector(selector),
        createDispatcherByResource(resource))(com || component);
}