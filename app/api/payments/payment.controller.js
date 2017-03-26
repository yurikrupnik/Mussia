
import Payment from './payment.model';
import {handleError, respondWithResult} from '../../services/node/nodeResponse/apiResponses';



// Gets a list Count
export function count(req, res) {
    return Payment.count()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a list of Payments
export function show(req, res) {
    return Payment.find({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}


