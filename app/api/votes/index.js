import express from 'express';
import { url } from './config';

import Model from './model';
import {  } from './controller'; // To Be Added
let router = express.Router();

// To Be Added - finish api

router.get(url, (req, res) => {
    // get votes
    Model.find().then(response => res.json(response));
});

export default router;