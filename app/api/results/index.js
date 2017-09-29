import express from 'express';
import {url} from './config';
import Model from './model';
import {} from './controller'; // To Be Added
let router = express.Router();

// todo - make it get and add more stuff for aggregate analytics

router.post(url, (req, res) => { // todo add query
    const {ids} = req.body;
    let promises = ids.map(answer_id => {
        // todo use aggregate from mongo api
        return Model.find({answer_id}).count().then(count => ({
            count,
            answer_id
        }));
    });
    Promise.all(promises).then(data => res.json(data));
});

export default router;