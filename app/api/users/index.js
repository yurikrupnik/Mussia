import express from 'express';
import {url} from './config';
import {getUsers, getUserById, updateUser, saveUser, deleteUser} from './controller';
let router = express.Router();

router.get(url, getUsers);
router.get(url + '/:id', getUserById);
router.post(url, saveUser);
router.put(url, updateUser);
router.delete(url, deleteUser);

export default router;

