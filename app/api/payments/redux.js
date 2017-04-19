import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getStateBySelector, dispatchActions} from '../../redux/util';
import createDispatcher from '../../redux/dispatcher';
import Actions from '../../redux/actions';

export default (component) => {
    let {resource, selector} = component;
    return connect(getStateBySelector(selector), createDispatcher(Actions(resource)))(component);
}