import {ADD_COUNTER, REMOVE_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/counters';

// import {removeByIndex, incrementByIndex, decrementByIndex} from './util/util';


function increment(num) {
    return num + 1;
}

function decrement(num) {
    return num - 1;
}
const incrementByIndex = (list, index) => {
    return [
        ...list.slice(0, index),
        increment(list[index]),
        ...list.slice(increment(index))
    ]
};

const decrementByIndex = (list, index) => {
    return [
        ...list.slice(0, index),
        decrement(list[index]),
        ...list.slice(increment(index))
    ]
};

const removeByIndex = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(increment(index))
    ];
};

export default (state = [12, 11, 122], action) => {
    const {type, index} = action;

    switch (type) {
        case ADD_COUNTER:
            return [...state, 50];
        case REMOVE_COUNTER:
            return removeByIndex(state, index);

        case INCREMENT_COUNTER:
            return incrementByIndex(state, index);

        case DECREMENT_COUNTER:
            return decrementByIndex(state, index);
        default:
            return state;
    }
};

