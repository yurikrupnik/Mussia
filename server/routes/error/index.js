/**
 * Created by yurikrupnik on 15/11/2016.
 */
import express from 'express';
let router = express.Router();
import {error} from './controller';

// router.get('*', error);

// export default router;
let error = (req, res) => {
    res.status(404).sendFile(path.join(config.root, 'views/404.html'));
    // res.sendFile(path.join(config.root, 'views/404.html'));
};

