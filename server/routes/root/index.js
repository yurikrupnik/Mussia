/**
 * Created by yurikrupnik on 15/11/2016.
 */
import express from 'express';
let router = express.Router();
import {index, error, requestTime, requestUrl} from './controller';
router.use(requestTime);
router.use(requestUrl);

router.get('/', index);

export default router;