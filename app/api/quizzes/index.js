import express from 'express';
import {url} from './config';
import {list, get, create, update, remove, removeByIds} from './controller';

let router = express.Router();

router.get(url, list);
router.get(url + '/:_id', get);
router.post(url, create);
router.put(url + '/:_id', update);
router.delete(url + '/:_id', remove);
router.delete(url, removeByIds);

export default router;