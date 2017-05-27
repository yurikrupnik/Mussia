import express from 'express';
let router =  express.Router();
import {
    findListOfIndexes, findList,
    CREATE, UPDATE, DELETE} from './controller';
import {url} from './config';
// router.get(url, findListOfIndexes);
router.get(url, findList);
// router.post(url, CREATE);
// router.post(url+'/:id', UPDATE);
router.delete(url, DELETE);
router.delete(url + '/:id', DELETE);


export default router;
