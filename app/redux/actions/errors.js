export const RECEIVED_ERROR = 'RECEIVED_ERROR';
export const SEND_ERROR = 'SEND_ERROR';

// actions
const received_error = (err) => {
    return {
        type: RECEIVED_ERROR,
        error: err
    }
};