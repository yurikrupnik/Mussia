export const ERROR_RECEIVED = 'ERROR_RECEIVED';
// export const CLEAdsRED_ERROR = 'SEND_ERROR';

// actions
const errorReceived = error => { // use in catch of a promise : .catch(received_error(dispatch))
    dispatch({
        type: ERROR_RECEIVED,
        error
    });
    return err;
};

const cleared_error = (error) => {
    return {
        // type: CLEARED_ERROR,
        // error
    }
};


export {
    errorReceived,
    // cleared_error
}