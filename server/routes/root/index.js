import express from 'express';
let router = express.Router();
import handleRoot from './controller';
export let rootUrl = '/'; // todo handle routes to return html at refresh
router.get(rootUrl, handleRoot);

export default router;