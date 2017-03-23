export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const addCounter =  () => {
    return {
        type: ADD_COUNTER
    }
};

export const removeCounter = (i) => {
    return {
        type: REMOVE_COUNTER,
        index: i
    }
};

export const incrementCounter = (i) => {
    return {
        type: INCREMENT_COUNTER,
        index: i
    }
};

export const decrementCounter = (i) => {
    return {
        type: DECREMENT_COUNTER,
        index: i
    }
};