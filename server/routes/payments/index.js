import express from 'express';
let router = express.Router();
import {index, getTen} from './constroller';

router.get('/payments', index);
router.post('/payments', getTen);

export default router;