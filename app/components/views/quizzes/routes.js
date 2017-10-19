import React from 'react';
// import Quiz from './Quiz';

const routes = [
    {
        path: '/quizzes/list',
        component: (props) => {
            console.log('props', props);

            return <div>quizzes List</div>
        }
    },
    {
        path: '/quizzes/edit/:quiz_id',
        component: (props) => {
            return <div>Edit</div>
        }
    },
    {
        path: '/quizzes/*',
        component: () => {
            return <div>quizzes route does not exist</div>
        }
    }
];

export default routes;