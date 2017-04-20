import {createReducerBySelector} from '../../redux/util';
import initialState from '../initialState';
export default createReducerBySelector(initialState, 'payments'); // todo create reducer