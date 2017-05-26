import Model from './payment.model';
import {has} from 'lodash';
import {handleError, respondWithResult, respondWithDelete , readCallback} from '../../services/node/nodeResponse/apiResponses';
// Gets a list Count
export function count(req, res) {
    return Model.count()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function CREATE(req, res) {
    const {body} = req;
    console.log('body', body);

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
    // console.log('fields', fields);

    // throw new Error({message: 'why limit 0', fields: 'shit'});
    //
    Model.
        find({
            // title: 'Reciver'
            // occupation: /host/,
            // 'name.last': 'Ghost',
            // age: { $gt: 17, $lt: 66 },
            // likes: { $in: ['vaporizing', 'talking'] }
        }, ['title', 'payDate'])
        .limit(10) //.
    //     // sort({ occupation: -1 }).
    //     // select({ name: 1, occupation: 1 }).
        .exec(readCallback(res));
    // return Model.find(query, ['title'])
    //     .then(respondWithResult(res))
    //     .catch(handleError(res));
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
export function READ_BY_ID(req, res) {

}

export function UPDATE(req, res) {
    const {query, params, body} = req;
    return Model.findOneAndUpdate({_id: params.id}, body)
        .then(respondWithResult(res))
        .catch(handleError(res));
}





export function DELETE_BY_ID(req, res) {
    const {body} = req;
    console.log('body', body);

    // const field = 'id'; // todo symbol it
    // let ids = has(body, field) ? [body[field]] : body;
    // res.ids = ids;
    // return Model.remove({_id: {$in: ids}})

    return Model.remove({_id: params.id})
        .then(respondWithDelete(res))
        .catch(handleError(res));
}

