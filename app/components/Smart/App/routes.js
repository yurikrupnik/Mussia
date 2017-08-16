import React, {Component} from 'react';
import Counter from '../Counter';
import Counters from '../Counters';
import Register from '../Register';
import Dashboard from '../Dashboard';

const routes = [
    {
        path: '/',
        component: Dashboard,
        // title: 'Dashboard', // title is for main dropdown - login is not shown
        exact: true
    },
    {
        path: '/counter',
        component: Counter,
        // title: 'Counter',
        exact: true
    },
    {
        path: '/counters',
        component: Counters,
        // title: 'Counters',
        exact: true
    },
    {
        path: '/register',
        component: Register,
        // hidden: true,
        exact: true
    }
];

export default routes;