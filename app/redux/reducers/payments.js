import Payments from '../../api/payments/request';
import {createReducerByUrl} from '../util';
let initialState = {
    data: [],
    active: false,
    // isFetching: false,
    // isReceived: false,
    // askOnce: false,
    error: null
};

export default createReducerByUrl(initialState, Payments.url);



