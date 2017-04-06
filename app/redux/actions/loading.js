export const REQUEST_SENT = 'REQUEST_SENT';
export const REQUEST_RECEIVED = 'REQUEST_RECEIVED';

export const requestSent = (details) => {
    return {
        type: REQUEST_SENT
    }
};

export const requestReceived = (dispatch) => {
    return (res) => {
        return dispatch({
            type: REQUEST_RECEIVED,
            data: res.body || res // this is run on server and client, make sure to make those actions for async data
        });
    };
};