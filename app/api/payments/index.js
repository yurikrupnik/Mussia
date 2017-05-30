import express from 'express';
let router =  express.Router();
import {
    findListOfIndexes, findList,
    deleteById, deleteByIds,
    CREATE, UPDATE,
} from './controller';
import {url} from './config';
// router.get(url, findListOfIndexes);
router.get(url, findList);
router.post(url, CREATE);
router.post(url+'/:id', UPDATE);
router.delete(url, deleteByIds);
router.delete(url + '/:id', deleteById);


export default router;
