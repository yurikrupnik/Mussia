import {createStore} from 'redux';
import reducer from '../reducers/index';
import composed from './composed';

export default (initialState = {}) => createStore(reducer, initialState, composed);
