import Friend from './friend.model';

let handleError = (res, statusCode) => {
    statusCode = statusCode || 500;
    return (err) => res.status(statusCode).send(err);
};

let respondWithResult = (res, statusCode) => {
    statusCode = statusCode || 200;
    return (entity) => res.status(statusCode).json(entity);
};



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
