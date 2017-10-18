import React from 'react';
import Quiz from './Quiz';

const routes = [
    {
        path: '/quizzes/:quiz_id',
        component: (props) => {
            return <div>quiz {props}</div>
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