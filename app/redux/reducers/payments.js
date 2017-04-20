import Payments from '../../api/payments/request';
import {createReducerBySelector} from '../util';
let initialState = {
    data: [],
    // isFetching: false,
    // isReceived: false,
    askOnce: false,
    error: null
};

export default createReducerBySelector(initialState, 'payments');



