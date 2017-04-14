import Sluts from '../../api/sluts/request';
import {createReducerByUrl} from '../util';
let initialState = {
    data: [],
    isFetching: false,
    isReceived: false,
    askOnce: false,
    error: null
};

export default createReducerByUrl(initialState, Sluts.url);



