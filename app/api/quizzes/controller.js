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

    // console.log('request.params', request.params);
    // console.log('request.params', request.url);
    // console.log('request.body', request.body);
    // if (request.params._id) {
        Model.deleteOne(request.params)
            .then(res => response.json(res))
            .catch(err => response.json(err));
    // } else {
    //     Model.remove({_id: {$id: request.body}})
    //         .then(res => response.json(res))
    //         .catch(err => response.json(err));
    // }

};


export {
    list,
    get,
    create,
    update,
    remove
}