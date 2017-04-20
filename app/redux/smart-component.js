import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getStateBySelector, dispatchActions, createReducerBySelector} from './util';
import createDispatcher from './dispatcher';
import Actions from './actions';
import initialState from './initialState';

export default (component) => {
    let {resource, selector, url} = component;
    // reducer = createReducerBySelector(initialState, selector); // todo create reducer
    // console.log('reducer', reducer);
    return connect(getStateBySelector(selector), createDispatcher(Actions(resource)))(component);
}