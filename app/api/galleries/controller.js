const findGalleriesByUserId = (req, res, next) => {
    Model.find({ user_id: req.body.user_id })
        .then(response => res.status(200).json(response))
        .catch(next);
};

export {
    findGalleriesByUserId
}