/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/payments              ->  count
 * POST    /api/payments              ->  show
 */
import Friend from './friend.model';
import {handleError, respondWithResult} from '../../services/node/nodeResponse/apiResponses';


export let count = (req, res) => {
    return Friend.find({}).count().exec()
        .then(respondWithResult(res))
        .catch(handleError(res))
};

export let show = (req, res) => {
    return Friend.find({}).exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
};
