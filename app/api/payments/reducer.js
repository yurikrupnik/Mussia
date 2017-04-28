import {selector, url} from './config';
import {createReducerBySelector} from '../../services/client/crud/util';
import {initialState} from '../../services/client/crud/config';
export default createReducerBySelector(initialState, selector);

