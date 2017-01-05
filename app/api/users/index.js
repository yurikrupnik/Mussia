import express from 'express';
let router = express.Router();
// import {index} from './constroller';
export let usersUrl = '/users';

let yebal = (req, res) => {
    res.json([12, 34, 5, 67,])
};
// let yebal1 = (req, res) => {
//     res.json(['shu', 'dasd', 'dsas', 'd',]);
// };
//
// let logger = (req, res, next) => {
//     console.log('body');
//     next();
// };


// router.get(usersUrl, logger);
router.get(usersUrl, yebal);
// router.post(usersUrl, logger, yebal1); // example of defining middle wares for specific routes

export default router;


// node js routes