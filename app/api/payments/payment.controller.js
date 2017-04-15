
import Model from './payment.model';
import {handleError, respondWithResult} from '../../services/node/nodeResponse/apiResponses';
// Gets a list Count
export function count(req, res) {
    return Model.count()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a list of Payments
export function GET(req, res) {
    return Model.find({}, 'name')
        .then(respondWithResult(res))
        .catch(handleError(res));
}


