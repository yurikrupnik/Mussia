import Model from './model';

const respondWithDelete = (res, statusCode) => () => res.status(statusCode || 202).json({ 'status': 'all good, deleted fine' });

const handleError = (res, statusCode) => err => res.status(statusCode || 500).send(err);

const deleteById = (req, res) => {
    const { body } = req;
    const { user_id } = body;
    Model.remove({ user_id })
        .then(respondWithDelete(res))
        .catch(handleError(res));
};

const findGalleriesByUserId = (req, res, next) => {
    Model.find({ user_id: req.body.user_id })
        .then(doc => res.status(200).json(doc))
        .catch(next);
};

export {
    findGalleriesByUserId,
    deleteById
}