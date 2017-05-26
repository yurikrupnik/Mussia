import express from 'express';
let router =  express.Router();
import {READ, CREATE, UPDATE, DELETE, READ_BY_ID} from './payment.controller';
import {url} from './config';

router.get(url, READ);
router.get(url + '/:id', READ_BY_ID);
router.post(url, CREATE);
router.post(url+'/:id', UPDATE);
router.delete(url, DELETE);

export default router;
