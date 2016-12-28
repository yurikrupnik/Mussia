
import {INCREMENT, DECREMENT} from '../actions/counter';

// import {increment, decrement} from './util/util';


export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state
    }
};


