import express from 'express';
import {url} from './config';
import Model from './model';
import {} from './controller'; // To Be Added
let router = express.Router();

router.get(url, (req, res) => {
    const {ids} = req.query;
    let promises = ids.map(answer_id => {
        // todo use aggregate from mongo api
        return Model.find({answer_id}).count().then(count => ({
            count,
            answer_id
        }));
    });
    Promise.all(promises).then(data => res.json(data));
});

// todo get if user id exists with quiz id - retrive the answer_id
router.get(url, (req, res) => {

});

// todo update/create result
router.post(url, (req, res) => { });

export default router;