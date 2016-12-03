import express from 'express';
let router = express.Router();
import {handlePost} from './controller';
export let registerUrl = '/register';
router.get('/', handlePost);
router.post('/', handlePost);

export default router;