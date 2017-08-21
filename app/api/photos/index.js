import express from 'express';
import Flickr from 'flickrapi';
import { url } from './config';
import secret from '../../services/express/middlewares/passport/secrets.json';
import {search, searchByPage} from './controller';

let router = express.Router();

const flickrOptions = {
    api_key: secret.flickr.consumerKey,
    secret: secret.flickr.consumerSecret
};

Flickr.tokenOnly(flickrOptions, function (error, flickr) {
    // we can now use "flickr" as our API object,
    // but we can only call public methods and access public data
    router.post(url, search(flickr));

    router.post(`${url}/:page`, searchByPage(flickr));

});

export default router;