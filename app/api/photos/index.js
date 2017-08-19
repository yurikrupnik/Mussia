import _ from 'lodash';
import Flickr from 'flickrapi';
import express from 'express';
import secret from '../../services/express/middlewares/passport/secrets.json';
// import {getUsers, getUserById, updateUser, saveUser, deleteUser} from './controller';
let router = express.Router();

import Model from './model';
import UserModel from '../users/model';

const flickrOptions = {
    api_key: secret.flickr.consumerKey,
    secret: secret.flickr.consumerSecret
};

//
// let v = [];
//
// let localStorage;
// if (typeof localStorage === "undefined" || localStorage === null) {
//     let LocalStorage = require('node-localstorage').LocalStorage;
//     localStorage = new LocalStorage(v);
//     localStorage.setItem('myFirstKey', 'myFirstValue');
//     console.log(localStorage.getItem('myFirstKey'));
// }
// if (typeof localStorage === "undefined" || localStorage === null) {
let LocalStorage = require('node-localstorage').LocalStorage;
let localStorage = new LocalStorage('./scratch');
// }

localStorage.setItem('myFirstKey', 'myFirstValue');
console.log(localStorage.getItem('myFirstKey'));

Flickr.tokenOnly(flickrOptions, function (error, flickr) {
    // we can now use "flickr" as our API object,
    // but we can only call public methods and access public data
    router.post('/service/photos', (req, res) => {
        // console.log('req.body.tags', req.body.tags);

        return flickr.photos.search({ tags: 'tel aviv', page: 2, per_page: 5 }, (err, response) => {
            if (err) {
                throw new Error(err);
            } else {
                let data = response.photos;
                data.tag = 'tel aviv';
                if (req.isAuthenticated()) {
                    // console.log('req.user', req.user[0].id);

                    data.user_id = req.user[0].id;
                    return Model.insertMany(data, function (err, docs) {
                        if (err) {
                            throw new Error(err);
                        }
                        res.status(200).json(docs);
                    });
                }
                res.status(200).json(data);
                // localStorage.setItem('searches', data);
                // return localStorage.getItem('searches');
            }
        });
    });

    router.get('/photos', (req, res) => {
        return Model.find().then(response => {
            console.log('res', res);

            res.status(200).json(response);
        })
    });

});

export default router;