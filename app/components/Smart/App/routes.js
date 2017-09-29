import React from 'react';
import Register from '../Register';
import Main from '../Main';
import Results from '../../../api/results/container';
import Quiz from '../../../api/quizzes/container';
// import Main from '../Main';

const routes = [
    {
        path: '/',
        component: Results, // used as results view
        exact: true
    },
    {
        path: '/:quiz_id',
        component: Main, // used as results view
        exact: true
    },
    {
        path: '/register',
        component: Register,
        exact: true
    }
];

export default routes;