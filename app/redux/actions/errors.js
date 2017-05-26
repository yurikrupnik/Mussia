export const RECEIVED_ERROR = 'RECEIVED_ERROR';
export const CLEARED_ERROR = 'SEND_ERROR';

// actions
export const received_error = (err) => {
    return dispatch => dispatch({
        type: RECEIVED_ERROR,
        error: err
    });
};

export const cleared_error = (err) => {
    return {
        type: CLEARED_ERROR,
        error: err
    }
};