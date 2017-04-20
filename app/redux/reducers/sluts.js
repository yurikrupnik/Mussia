import Sluts from '../../api/sluts/request';
import {createReducerBySelector} from '../util';
let initialState = {
    data: [],
    isFetching: false,
    isReceived: false,
    askOnce: false,
    error: null
};

export default createReducerBySelector(initialState, Sluts.url);



