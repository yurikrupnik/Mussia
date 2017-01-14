import Users from './model';

import {handleError, respondWithResult} from '../../services/nodeResponse/apiResponses';



// Gets a list Count
export function getUser(req, res) {
    return Payment.find({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function updateUser(req, res) {
    return Payment.find({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}


export function saveUser(req, res) {
    return Payment.find({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function deleteUser(req, res) {
    return Payment.find({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}