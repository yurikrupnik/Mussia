import Model from './model';

const list = (request, response) => {
    Model.find()
        .then(res => response.json(res))
        .catch(err => response.json(err));
};

const getById = (request, response) => {
    Model.findOne(request.params)
        .then(res => response.json(res))
        .catch(err => {
            response.json(err);
        });
};

export {
    list,
    getById
}