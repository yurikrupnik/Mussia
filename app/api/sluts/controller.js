
import Model from './model';
import {handleError, respondWithResult} from '../../services/node/nodeResponse/apiResponses';
// Gets a list Count
export function count(req, res) {
    return Model.count()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a list of Payments
export function GET(req, res) {
    return Model.find({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}


/**
 * Created by yurikrupnik on 14/04/2017.
 */
