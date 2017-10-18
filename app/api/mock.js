import shortid from 'shortid';
import faker from 'faker';
import _ from 'lodash';

const users = _.times(5).map(val => {
    return {
        email: faker.internet.email(),
        id: shortid.generate()
    }
});

const quizzes = _.times(5).map(val => {
    return {
        label: faker.lorem.words(),
        answers: _.times(_.random(3, 5)).map(() => {
            return {
                label: faker.lorem.words()
            }
        })
    }
});


// const results = _.times(100).map(i => {
//     return {
//         // quiz_id: quizzes[i]._id,
//         user_id: null,
//         answer_id: quizzes[i].answers[_.random(0, i)]
//     }
// });
const results = [ // db mock of results
    {
        // quiz_id: 1,
        user_id: '153701624@N07',
        answer_id: 'some Object id'
    },
    {
        // quiz_id: 2,
        user_id: '153701624@N07',
        answer_id: 'some Object id'
    }
];

// in client

const clientResults = [{
    answer_id: 'some Object id',
    count: 4,
    label: 'some answer string'
}];

export {
    users,
    quizzes,
    results
}