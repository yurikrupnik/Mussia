import React from 'react';
import ResultsContainer from './api/results/container';
import QuizzesContainer from './api/quizzes/container';
import Quiz from './components/Quiz';
import Hello from './components/Hello';

const routes = [
    {
        path: '/',
        component: ResultsContainer, // used as results view
        exact: true
    },
    {
        path: '/:quiz_id',
        component: (props, a, b) => {
            return <QuizzesContainer><Quiz/><Hello/></QuizzesContainer>;
        },
        exact: true
    },
    // {
    //     path: '/register',
    //     component: Register,
    //     exact: true
    // }
];

export default routes;