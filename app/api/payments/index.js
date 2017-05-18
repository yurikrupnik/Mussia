import express from 'express';
let router =  express.Router();
import {READ, CREATE, UPDATE, DELETE} from './payment.controller';
import {url} from './config';
router.get(url, READ);
router.post(url, CREATE);
router.post(url+'/:id', UPDATE);
router.delete(url, DELETE);

export default router;
