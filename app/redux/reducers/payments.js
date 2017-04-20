import Payments from '../../api/payments/request';
import {createReducerBySelector} from '../util';
let initialState = {
    data: [],
    active: false,
    error: null
};

export default createReducerBySelector(initialState, 'payments');



