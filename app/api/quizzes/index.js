import express from 'express';
import {url} from './config';
import {list, getById} from './controller'; // To Be Added

let router = express.Router();

router.get(url, list);
router.get(url + '/:_id', getById);
// todo create
// todo edit
// todo delete



export default router;