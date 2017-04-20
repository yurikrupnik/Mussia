import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getStateBySelector, dispatchActions, createReducerBySelector} from '../../redux/util';
import createDispatcher from '../../redux/dispatcher';
import Actions from '../../redux/actions';

import initialState from '../initialState';
let payments = createReducerBySelector(initialState, 'payments'); // todo create reducer

export default (component) => {
    let {resource, selector, url} = component;
    // reducer = createReducerBySelector(initialState, selector); // todo create reducer
    // console.log('reducer', reducer);
    return connect(getStateBySelector(selector), createDispatcher(Actions(resource)))(component);
}

// function getReducer() {
//     return reducer;
// }
//
export {
    payments
}