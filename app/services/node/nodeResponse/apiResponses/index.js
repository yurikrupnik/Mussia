
const get_id = value => value._id;

export let handleError = (res, statusCode) => {
    statusCode = statusCode || 500;
    return (err) => res.status(statusCode).send(err);
};

export let respondWithResult = (res, statusCode) => {
    statusCode = statusCode || 200;
    return (entity) => res.status(statusCode).json(entity);
};

export let respondWithIds = (res, statusCode) => {
    statusCode = statusCode || 200;
    return (entity) => {
        res.status(statusCode).json(entity.map(get_id))
    };
};

export let respondWithDelete = (res, statusCode) => {
    // send the ids back to the client to remove from the view without http request
    const {ids} = res;
    statusCode = statusCode || 202;
    return entry => res.status(statusCode).json(ids);

};