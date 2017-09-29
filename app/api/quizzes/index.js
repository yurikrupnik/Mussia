import mongoose, {Schema} from 'mongoose';
import express from 'express';
import {url} from './config';
import Model from './model';
import {list, getById} from './controller'; // To Be Added

let router = express.Router();

router.get(url, list);
router.get(url + '/:_id', getById);

export default router;