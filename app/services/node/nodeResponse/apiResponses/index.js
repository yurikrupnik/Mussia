export let handleError = (res, statusCode) => {
    statusCode = statusCode || 500;
    return (err) => res.status(statusCode).send(err);
};

export let respondWithResult = (res, statusCode) => {
    statusCode = statusCode || 200;
    return (entity) => res.status(statusCode).json(entity);
};

export let respondWithDelete = (res, statusCode) => {
    statusCode = statusCode || 204;
    return entry => res.status(statusCode).json({deleted: true});
};