import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getStateByModelPrefix, dispatchActions} from '../../redux/util';
import createDispatcher from '../../redux/dispatcher';
import Payments from './request';
import Actions from '../../redux/actions';
const actions = Actions(Payments);

// todo test
export default (component) => {
    // todo try build here the reducer  §§§§§§§§§§§§§
    const prefix = '';
    return connect(getStateByModelPrefix('payments'), createDispatcher(actions))(component);
}