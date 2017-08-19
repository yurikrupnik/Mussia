import express from 'express';
import Flickr from 'flickrapi';
// import {} from './controller';

import { url } from './config';
import Model from '../galleries/model';
import secret from '../../services/express/middlewares/passport/secrets.json';

let router = express.Router();

const flickrOptions = {
    api_key: secret.flickr.consumerKey,
    secret: secret.flickr.consumerSecret
};

Flickr.tokenOnly(flickrOptions, function (error, flickr) {
    // we can now use "flickr" as our API object,
    // but we can only call public methods and access public data
    router.post(url, (req, res, next) => {
        flickr.photos.search({ tags: req.body.tag }, (_err, response) => {
            if (_err) return next(_err);
            let data = response.photos;
            if (!req.isAuthenticated()) {
                res.status(200).json(data);
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
                            res.status(200).json(doc);
                        });
                    }
                })
            }
        });
    }); // todo move handler to controller

    router.post(`${url}/:page`, function (req, res, next) {
        flickr.photos.search({ tags: req.body.tag, page: req.params.page }, (err, response) => {
            if (err) return next(err);
            let data = response.photos;
            data.tag = req.body.tag;
            res.status(200).json(data);
        });
    }); // todo move handler to controller

});

export default router;