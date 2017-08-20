export const RECEIVED_ERROR = 'RECEIVED_ERROR';
export const CLEARED_ERROR = 'SEND_ERROR';

// actions
const received_error = dispatch => err => { // use in catch of a promise : .catch(received_error(dispatch))
    dispatch({
        type: RECEIVED_ERROR,
        error: err
    });
    return err;
};

const cleared_error = (err) => {
    return {
        type: CLEARED_ERROR,
        error: err
    }
};


export {
    received_error,
    cleared_error
}