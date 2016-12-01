/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/payments              ->  count
 * POST    /api/payments              ->  show
 */

'use strict';

import Payment from './payment.model';
import {handleError, respondWithResult} from '../../services/nodeResponse/apiResponses';



// Gets a list Count
export function count(req, res) {
    return Payment.find().count().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a list of Payments Depend on page and limit body params
export function show(req, res) {

    function buildQueryByIndex(body) {
        let {limit, page, csv} = body;
        let gt, lt;
        if (csv && page >= 1) {
            gt = (page - 1) * limit; // example page=2 for csv, will pass index 1000+
        } else {
            gt = (page === 1) ? 0 : page * limit;
        }
        lt = gt + limit;
        console.log('page which server got as parameter', page);

        return {index: {$gt: gt, $lt: lt}};
    }

    return Payment.find({}).exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}


