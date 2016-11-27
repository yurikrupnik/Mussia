import express from 'express';
let router = express.Router();
// import {index} from './constroller';
export let usersUrl = '/users';

let yebal = (req, res) => {
    res.json([12, 34, 5, 67,])
};

router.get(usersUrl, yebal);

export default router;


// node js routes