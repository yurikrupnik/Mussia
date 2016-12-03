export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

/*
 * action creators
 */
export const plus = () => {
    return {
        type: INCREMENT
    }
};

export const minus = () => {
    return {
        type: DECREMENT
    }
};


