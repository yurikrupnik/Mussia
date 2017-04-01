import {REQUEST_SENT, REQUEST_RECEIVED} from '../actions/isFetching';

export default (state = false, action) => {
    switch (action.type) {
        case REQUEST_SENT:
            return !state;
        case REQUEST_RECEIVED:
            return !state;
        default:
            return state;
    }
}