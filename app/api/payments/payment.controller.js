import Model from './payment.model';
import {has} from 'lodash';
import {handleError, respondWithResult, respondWithDelete} from '../../services/node/nodeResponse/apiResponses';
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
export function READ(req, res) {

    console.log('req.query', req.query);
    console.log('req.params', req.params);

    let query = {};
    let fields = 'name';

    return Model.find(query, fields)
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function UPDATE(req, res) {
    return Model.findOneAndUpdate({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function DELETE(req, res) {
    const {query, params, body} = req;

    const field = 'id';
    let ids = has(body, field) ? [body[field]] : body;
    res.ids = ids;
    return Model.remove({_id: {$in: ids}})
        .then(respondWithDelete(res))
        .catch(handleError(res));
}





