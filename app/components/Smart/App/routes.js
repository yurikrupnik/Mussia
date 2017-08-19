import React from 'react';
import Register from '../Register';
import Main from '../Main';

const routes = [
    {
        path: '/',
        component: Main,
        exact: true
    },
    {
        path: '/register',
        component: Register,
        exact: true
    }
];

export default routes;