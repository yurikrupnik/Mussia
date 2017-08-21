
import Model from '../galleries/model';

const search = flickr => (req, res, next) => {
    return flickr.photos.search({ tags: req.body.tag }, (_err, response) => {
        if (_err) {
            return next(_err);
        }
        let data = response.photos;
        if (!req.isAuthenticated()) {
            return res.status(200).json(data);
        } else {
            data.tag = req.body.tag;
            data.user_id = req.user.length ? req.user[0].id : '';
            let criteria = { user_id: data.user_id, tag: data.tag };

            // todo promise it
            Model.findOne(criteria, (err, item) => {
                if (err) next(err);
                if (item) res.status(200).json(item);
                else {
                    let newSearch = new Model(data);
                    newSearch.save(function (er, doc) {
                        if (er) next(er);
                        return res.status(200).json(doc);
                    });
                }
            })
        }
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