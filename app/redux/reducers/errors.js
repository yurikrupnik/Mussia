import {RECEIVED_ERROR} from '../actions/errors';

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVED_ERROR:
            return state;
        default:
            return state;
    }
};