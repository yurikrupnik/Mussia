import Model from './model';
import {has} from 'lodash';
import {
    handleError,
    respondWithIds,
    respondWithResult,
    respondWithDelete,
    respondWithCreate
} from '../../services/node/nodeResponse/apiResponses';
// Gets a list Count
export function count(req, res) {
    return Model.count()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function CREATE(req, res) {
    const {body} = req;
    return Model.create(body)
        .then(respondWithCreate(res))
        .catch(handleError(res));
}

// Gets a list of Payments
export function findListOfIndexes(req, res) {
    const {query, params, body} = req;
    // let query = {};
    let fields = '_id';
    // res.status(500).end(new Error({Errr: 'dsa'}));
    console.log('Model', Model);

    return Model.find(query, fields)
        .then(respondWithIds(res))
        .catch(handleError(res));
}

export function findList(req, res) {
    const {query} = req;
    const {fields} = query;
    return Model.find({}, fields)
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function UPDATE(req, res) {
    const {query, params, body} = req;
    return Model.findOneAndUpdate({_id: params.id}, body)
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function deleteById(req, res) {
    const {params} = req;
    const {id} = params;
    res.id = id;
    return Model.remove({id: id})
        .then(respondWithDelete(res))
        .catch(handleError(res));
}

export function deleteByIds(req, res) {
    const {body} = req;
    res.id = body;
    return Model.remove({id: {$in: body}})
        .then(respondWithDelete(res))
        .catch(handleError(res));
}



