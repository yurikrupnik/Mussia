import express from 'express';
let router =  express.Router();
import {getUsers, getUserById, updateUser, saveUser, deleteUser} from './controller';
let usersUrl = '/users';

router.get(usersUrl, getUsers);
router.get(usersUrl + '/:id', getUserById);
router.post(usersUrl, saveUser);
router.put(usersUrl, updateUser);
router.delete(usersUrl, deleteUser);

export default router;

