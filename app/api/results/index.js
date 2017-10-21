import express from 'express';
import {url, countUrl, answerUrl} from './config';
import Model from './model';
import {} from './controller'; // To Be Added
let router = express.Router();

router.get(countUrl, (req, res) => {
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

// todo read if user id exists with quiz id - retrive the answer_id
router.get(answerUrl, (req, res) => { // read answer by user id and quiz id
    const {quiz_id, user_id} = req.query;
    Model.findOne({quiz_id, user_id}).then(response => {
        res.json(response ? {answer_id: response.answer_id} : null);
    }).catch(err => {
        console.log('err', err);

    })
});

// todo update/create result
router.post(url, (req, res) => { });

export default router;