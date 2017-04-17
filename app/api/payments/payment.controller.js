
import Model from './payment.model';
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
    return Model.findOneAndUpdate({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function DELETE(req, res) { // DELETE
    if (Array.isArray(req.body) && req.body.length) {
        return Model.remove({_id: {$in: req.body}})
            .then(respondWithDelete(res))
            .catch(handleError(res));
    } else {
        return Model.findOneAndDelete({_id: req.body.id})
            .then(respondWithDelete(res))
            .catch(handleError(res));
    }

}





