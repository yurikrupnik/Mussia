export const REQUEST_SENT = 'REQUEST_SENT';
export const REQUEST_RECEIVED = 'REQUEST_RECEIVED';

const requestSent = () => {
    return {
        type: REQUEST_SENT
    }
};

const requestReceived = () => {
    return {
        type: REQUEST_RECEIVED
    }
};
