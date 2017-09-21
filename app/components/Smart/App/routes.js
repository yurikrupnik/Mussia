import React from 'react';
import Register from '../Register';
import Main from '../Main';

// To Be Added - write client routes for the views
const routes = [
    {
        path: '/',
        component: Main, // used as votes view
        exact: true
    },
    {
        path: '/register',
        component: Register,
        exact: true
    }
];

export default routes;