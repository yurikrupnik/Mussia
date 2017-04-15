
import Model from './payment.model';
import {handleError, respondWithResult} from '../../services/node/nodeResponse/apiResponses';
// Gets a list Count
export function count(req, res) {
    return Model.count()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function CREATE(req, res) { // POST
    return Model.find({}, 'name')
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a list of Payments
export function READ(req, res) { // GET

    console.log('req.query', req.query);
    console.log('req.params', req.params);

    let query = {};
    let fields = 'name';

    return Model.find(query, fields)
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function UPDATE(req, res) { // UPDATE
    return Model.find({}, 'name')
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function DELETE(req, res) { // DELETE
    return Model.find({}, 'name')
        .then(respondWithResult(res))
        .catch(handleError(res));
}





