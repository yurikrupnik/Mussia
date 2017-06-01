import express from 'express';
let router =  express.Router();
import {
    findListOfIndexes, findList, getSchema,
    deleteById, deleteByIds,
    CREATE, UPDATE,
} from './controller';
import {url} from './config';
// router.get(url, findListOfIndexes);
// router.post(url+'/:id', UPDATE);
router.get(url + '/schema', getSchema);
router.get(url, findList);
router.post(url, CREATE);
router.delete(url, deleteByIds);
router.delete(url + '/:id', deleteById);


export default router;
