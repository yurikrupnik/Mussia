import express from 'express';
import { url } from './config';
// import Model from './model';
import { findGalleriesByUserId } from './controller';
let router = express.Router();

router.post(url, findGalleriesByUserId);

export default router;