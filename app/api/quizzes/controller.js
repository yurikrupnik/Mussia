import Model from './model';

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
    new Model(request.body)
        .save()
        .then(res => response.json(res))
        .catch(err => {
            console.log('db error', err);
            response.json(err);
        });
};

const update = (request, response) => {
    console.log('request.params', request.params);
    Model.findById(request.params, function (err, doc) {
        if (err) {
            return response.json(err);
        }
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
    list,
    get,
    create,
    update,
    remove,
    removeByIds
}