import express from 'express';
let router = express.Router();
import handle404 from './controller';

export let errorUrl = '*';

router.get('*', handle404);

export default router;
