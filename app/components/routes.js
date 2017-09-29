import React from 'react';
// import Register from './Smart/Register/index';
import Results from '../api/results/container';
import Quiz from '../api/quizzes/container';

const routes = [
    {
        path: '/',
        component: Results, // used as results view
        exact: true
    },
    {
        path: '/:quiz_id',
        component: Quiz, // used as results view
        exact: true
    },
    // {
    //     path: '/register',
    //     component: Register,
    //     exact: true
    // }
];

export default routes;