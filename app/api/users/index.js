import express from 'express';
let router = express.Router();
import {getUser, updateUser, saveUser, deleteUser} from './controller';
let usersUrl = '/users';

router.get(usersUrl, getUser);
router.post(usersUrl, saveUser);
router.put(usersUrl, updateUser);
router.delete(usersUrl, deleteUser);

export default router;

