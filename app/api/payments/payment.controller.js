import Model from './payment.model';
import {has} from 'lodash';
import {handleError, respondWithResult, respondWithDelete} from '../../services/node/nodeResponse/apiResponses';
// Gets a list Count
export function count(req, res) {
    return Model.count()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function CREATE(req, res) {
    const {body} = req;
    return Model.create(body)
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a list of Payments
export function READ(req, res) {

    // todo , req does not containts body in get methods

    const {query, params, body} = req;
    // let query = {};
    console.log('query', query);
    console.log('params', params);
    console.log('body', body);


    let fields = query.fields || [];
    // res.status(500).end(new Error({Errr: 'dsa'}));
    return Model.find(query, fields)
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function READ_BY_ID(req, res) {

}

export function UPDATE(req, res) {
    const {query, params, body} = req;
    return Model.findOneAndUpdate({_id: params.id}, body)
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function DELETE(req, res) {
    const {body} = req;
    const field = 'id'; // todo symbol it
    let ids = has(body, field) ? [body[field]] : body;
    res.ids = ids;
    return Model.remove({_id: {$in: ids}})
        .then(respondWithDelete(res))
        .catch(handleError(res));
}





