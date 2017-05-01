import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getStateBySelector, createDispatcherByResource} from './util';
// import Actions from './actions';
// import {createDispatcherByActions} from './util';

export default (component) => {
    let {resource, selector, url} = component;
    return connect(getStateBySelector(selector), createDispatcherByResource(resource))(component);
}