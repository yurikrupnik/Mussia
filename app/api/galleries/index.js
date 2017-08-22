import express from 'express';
import { url } from './config';

import { findGalleriesByUserId, deleteById } from './controller';

let router = express.Router();

router.post(url, findGalleriesByUserId); // todo change to get
router.delete(url, deleteById);

export default router;