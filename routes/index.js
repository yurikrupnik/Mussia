import express from 'express';
import path from 'path';
let router = express.Router();

router.get('/api', function (req, res) {
    res.json([{"name": "yuri"}, {"name": "Tal"}]);
});


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'views/index.html'));
});

export default router;


