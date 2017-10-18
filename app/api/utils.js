import {apiPrefix, host} from './../config/env';

const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error
    }
};

const parseJSON = response => response.json();

const handleHost = () => global.window ? '' : host;

const handleHostAndPrefix = () => `${handleHost()}${apiPrefix}`;

export {
    checkStatus,
    parseJSON,
    handleHostAndPrefix
}