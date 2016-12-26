import {createStore} from 'redux';
import reducer from '../reducers/index';
import composed from './composed';

export default createStore(reducer, {}, composed);

