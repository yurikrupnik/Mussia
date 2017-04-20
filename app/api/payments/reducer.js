import {selector, url} from './config';
import {createReducerBySelector} from '../../redux/util';
import initialState from '../../redux/initialState';
export default createReducerBySelector(initialState, selector);

