import Users from './model';

import {handleError, respondWithResult} from '../../services/node/nodeResponse/apiResponses';



// Gets a list Count
export function getUser(req, res) {
    return Users.find({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function updateUser(req, res) {
    return Users.find({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}


export function saveUser(req, res) {
    return Users.find({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function deleteUser(req, res) {
    return Users.remove()
        .then(respondWithResult(res))
        .catch(handleError(res));
}