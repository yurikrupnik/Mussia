/**
 * Created by yurikrupnik on 15/11/2016.
 */
import express from 'express';
let router = express.Router();
import {root} from './controller';

router.get('/', root);

export default router;