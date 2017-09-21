import express from 'express';
import { url } from './config';
import Model from './model';
import {  } from './controller'; // To Be Added

let router = express.Router();

// To Be Added - finish api

router.get(url, function (request, response) {
    // get quizzes
    console.log('request.params', request.params);
    Model.find()
        .then(res => response.json(res));
});

export default router;