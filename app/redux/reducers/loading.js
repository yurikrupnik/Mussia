import {REQUEST_SENT, REQUEST_RECEIVED} from '../actions/loading';

let loading = (state = false, action) => {
    switch (action.type) {
        case REQUEST_SENT:
            return !state;
        case REQUEST_RECEIVED:
            return !state;
        default:
            return state;
    }
};

export default loading;
