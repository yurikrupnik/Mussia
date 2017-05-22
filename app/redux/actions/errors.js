export const RECEIVED_ERROR = 'RECEIVED_ERROR';
export const CLEARED_ERROR = 'SEND_ERROR';

// actions
const received_error = (err) => {
    return {
        type: RECEIVED_ERROR,
        error: err
    }
};

const cleared_error = (err) => {
    return {
        type: CLEARED_ERROR,
        error: err
    }
};