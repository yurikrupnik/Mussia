import express from 'express';
let router = express.Router();
import handleRoot from './controller';
export let rootUrl = '*';
router.get(rootUrl, handleRoot);

export default router;