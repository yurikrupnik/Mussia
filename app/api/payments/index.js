import express from 'express';
let router =  express.Router();
import {
    READ, READ_BY_ID,
    CREATE,
    UPDATE,
    DELETE, DELETE_BY_ID,
} from './payment.controller';
import {url} from './config';

router.get(url, READ);
// router.post(url, READ); // todo if url is to long
router.get(url + '/:id', READ_BY_ID);

router.put(url + '/:id', UPDATE); // replace the entire resource

router.patch(url + '/:id', UPDATE); //  relative update

router.delete(url + '/:id', DELETE_BY_ID);
router.delete(url, DELETE);

// router.post(url + '/:id', READ_BY_ID);
router.post(url, CREATE);

// router.post(url+'/:id', UPDATE);


export default router;
