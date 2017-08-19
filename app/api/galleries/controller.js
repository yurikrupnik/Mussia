import Model from './model';

const findGalleriesByUserId = (req, res, next) => {
    Model.find({ user_id: req.body.user_id }, (err, doc) => {
        if (err) {
            next(err);
        }
        res.status(200).json(doc);
    });
};

export {
    findGalleriesByUserId
}