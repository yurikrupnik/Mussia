import express from 'express';
let router = express.Router();
import {index} from './constroller';

router.get('/payments', index);

export default router;