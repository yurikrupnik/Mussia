import {REQUEST_USER, RECEIVE_USER} from '../actions/user';

// import {removeByIndex, incrementByIndex, decrementByIndex} from './util/util';
export default (state = {user: null}, action) => {

    switch (action.type) {
        case REQUEST_USER:
            return Object.assign({}, state, {isFetching: !state.isFetching});
        case RECEIVE_USER:
            return Object.assign({}, state, {user: action.user});
        default:
            return state;
    }
};


