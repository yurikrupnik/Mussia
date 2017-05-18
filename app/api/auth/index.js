import {handleLogin, handleLogout} from './controller';
// import {url} from './config';
import express from 'express';
let router =  express.Router();

router.post('/auth/login', handleLogin);
router.get('/auth/logout', handleLogout);

export default router;
