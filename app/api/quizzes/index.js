import express from 'express';
import {url} from './config';
import {list, get, create, update, remove} from './controller';

let router = express.Router();

router.get(url, list);
router.get(url + '/:_id', get);
router.post(url, create);
router.put(url + '/:_id', update);
router.delete(url + '/:_id', remove);

export default router;