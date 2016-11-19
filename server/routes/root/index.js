/**
 * Created by yurikrupnik on 15/11/2016.
 */
import express from 'express';
let router = express.Router();
import handleRoot from './controller';

router.get('/', handleRoot);

export default router;