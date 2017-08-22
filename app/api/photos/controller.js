
import Model from '../galleries/model';

const search = flickr => (req, res, next) => {
    flickr.photos.search({ tags: req.body.tag }, (err, response) => {
        if (err) return next(err);
        let data = response.photos;
        if (!req.isAuthenticated()) return res.status(200).json(data);

        data.tag = req.body.tag;
        data.user_id = req.user.length ? req.user[0].id : '';
        let criteria = { user_id: data.user_id, tag: data.tag };

        Model.findOne(criteria)
            .then(item => {
                if (item) res.status(200).json(item);
                else {
                    new Model(data).save()
                        .then(doc => res.status(200).json(doc))
                        .catch(next);
                }
            })
            .catch(next);
    });
};

const searchByPage = flickr => (req, res, next) => {
    flickr.photos.search({ tags: req.body.tag, page: req.params.page }, (err, response) => {
        if (err) return next(err);
        let data = response.photos;
        data.tag = req.body.tag;
        res.status(200).json(data);
    });
};

export {
    search,
    searchByPage
}