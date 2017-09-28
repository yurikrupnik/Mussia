import express from 'express';
import { url } from './config';
import Model from './model';
import {  } from './controller'; // To Be Added

let router = express.Router();

// To Be Added - finish api
// ALLOWED TO BY TEACHER OR PRINCIPLE
// todo create quiz
// todo delete quiz
// todo edit/update quiz
// todo add to the get api by query string of specific quizz
// same for redux actions
router.get(url, function (request, response) {
    Model.find({})
        .then(res => response.json(res));
});

export default router;