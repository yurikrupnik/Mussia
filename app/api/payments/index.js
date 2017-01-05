import express from 'express';
import {count, show} from './payment.controller';
export let paymentsUrl = '/payments';
let router = express.Router();

router.get(paymentsUrl, show);
router.get(paymentsUrl + '/count', count);

export default router

