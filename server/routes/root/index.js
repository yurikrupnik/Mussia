/**
 * Created by yurikrupnik on 15/11/2016.
 */
import express from 'express';
let router = express.Router();
import {index} from './controller';

router.get('/', index);

export default router;