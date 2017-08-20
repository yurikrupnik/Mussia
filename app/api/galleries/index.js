import express from 'express';
import { url } from './config';
import Model from './model';
import { findGalleriesByUserId } from './controller';

let router = express.Router();

const respondWithDelete = (res, statusCode) => {
    statusCode = statusCode || 202;
    return () => res.status(statusCode).json({ 'status': 'all good, deleted fine' });
};

const handleError = (res, statusCode) => {
    statusCode = statusCode || 500;
    return err => res.status(statusCode).send(err);
};

function deleteById(req, res) {
    const { body } = req;
    const { user_id } = body;
    return Model.remove({ user_id })
        .then(respondWithDelete(res))
        .catch(handleError(res));
}


router.post(url, findGalleriesByUserId);

router.delete(url, deleteById);

export default router;