import Model from './model';
import {} from 'lodash';

const getSchema = (request, response) => response.json(Model.schema);

const list = (request, response) => {
    Model.find()
        .then(res => response.json(res))
        .catch(err => response.json(err));
};

const get = (request, response) => {
    Model.findOne(request.params)
        .then(res => response.json(res))
        .catch(err => {
            response.json(err);
        });
};

const create = (request, response) => {
    Model.create(request.body)
        .then(res => response.json(res))
        .catch(err => {
            console.log('db error', err);
            response.json(err);
        });
};

const update = (request, response) => {
    Model.findById({_id: request.params._id}, function (err, doc) {
        if (err) {
            return response.json(err);
        }
        doc.label = request.body.label;
        doc.save((error, res) => {
            if (error) {
                return response.json(error);
            }
            response.json(res);
        });
    });
};

const remove = (request, response) => {
    Model.deleteOne(request.params)
        .then(res => response.json(res))
        .catch(err => response.json(err));
};

const removeByIds = (request, response) => {
    Model.remove({_id: {$in: request.body.ids}})
        .then(res => response.json(res))
        .catch(err => response.json(err));
};

export {
    getSchema,
    list,
    get,
    create,
    update,
    remove,
    removeByIds
}