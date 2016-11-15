import express from 'express';
let router = express.Router();
// import {index} from './constroller';

router.get('/users', function (req, res) {
    res.json([12, 34, 5, 67,]);
});

export default router;