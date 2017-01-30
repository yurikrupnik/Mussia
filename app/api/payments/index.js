import express from 'express';
import {count, show} from './payment.controller';
import {mainURL, countURL} from './urls';
let router = express.Router();

router.get(mainURL, show);
router.get(countURL, count);

export default router;
