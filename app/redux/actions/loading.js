export const REQUEST_SENT = 'REQUEST_SENT';
export const REQUEST_RECEIVED = 'REQUEST_RECEIVED';

export const requestSent = (details) => {
    debugger
    // console.log('details', details);


    return dispatch => {
        // let a = 'a';
        dispatch({
            type: REQUEST_SENT
        });
    };
};

export const requestReceived = (details) => {
    // console.log('details', details);
    // debugger
    return {
        type: REQUEST_RECEIVED
    }
};
