import express from 'express';
import {getUsers, getUserById, updateUser, saveUser, deleteUser} from './controller';
let router =  express.Router();
let usersUrl = '/users';

router.get(usersUrl, getUsers);
router.get(usersUrl + '/:id', getUserById);
router.post(usersUrl, saveUser);
router.put(usersUrl, updateUser);
router.delete(usersUrl, deleteUser);

export default router;

