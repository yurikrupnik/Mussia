import express from 'express';
import path from 'path';

import config from '../config/env';

let router = express.Router();

router.get('/api', function (req, res) {
    res.json([{"name": "yuri"}, {"name": "Tal"}]);
});


router.get('/', function (req, res) {
    res.sendFile(path.join(config.root, 'views/index.html'));
});

export default router;


