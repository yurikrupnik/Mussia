export const ERROR_RECEIVED = 'ERROR_RECEIVED';
// export const CLEAdsRED_ERROR = 'SEND_ERROR';

// actions
const errorReceived = error => ({
    type: ERROR_RECEIVED,
    error
});

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