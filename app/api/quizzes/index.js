import mongoose, {Schema} from 'mongoose';
import express from 'express';
import {url} from './config';
import Model from './model';
import {} from './controller'; // To Be Added

let router = express.Router();

// To Be Added - finish api
// ALLOWED TO BY TEACHER OR PRINCIPLE
// todo create quiz
// todo delete quiz
// todo edit/update quiz
// todo add to the get api by query string of specific quizz
// same for redux actions

const list = (request, response) => {
    Model.find()
        .then(res => response.json(res))
        .catch(err => response.json(err));
};

const getById = (request, response) => {
    Model.findOne(request.params)
        .then(res => response.json(res))
        .catch(err => {
            // console.log('err', err);
            response.json(err);
        });
};


router.get(url, list);
router.get(url + '/:_id', getById);

export default router;