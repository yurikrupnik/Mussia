import express from 'express';
import { url } from './config';

import Model from './model';
import {  } from './controller'; // To Be Added
let router = express.Router();

// To Be Added - finish api
// this api provides me clean api in the client - without joins
// mongoose populate fails
// can join in node but not worth it and lose the benefit of noSQL
// todo get specific results for quiz - select the correct answer user had
// todo update/edit results
// todo create result
// todo delete result
// same for redux actions
router.get(url, (req, res) => { // todo add query
    // get results

    Model.find({}).then(response => res.json(response));
});

export default router;