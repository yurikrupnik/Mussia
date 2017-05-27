import React, {Component} from 'react';



import Counter from '../Counter';
import Counters from '../Counters';
import Register from '../Register';
import Payments from '../Payments';
import Friends from '../Friends';
import Dashboard from '../Dashboard';
import Topics from '../Topics';



const routes = [
    {
        path: '/dashboard',
        component: Dashboard,
        title: 'Dashboard', // title is for main dropdown - login is not shown
        exact: true
    },
    {
        path: '/topics',
        component: Topics,
        title: 'Topics',
        exact: true
    },
    {
        path: '/counter',
        component: Counter,
        title: 'Counter',
        exact: true
    },
    {
        path: '/counters',
        component: Counters,
        title: 'Counters',
        exact: true
    },
    {
        path: '/payments',
        component: Payments,
        title: 'Payments',
        exact: true,
    },
    {
        path: '/register',
        component: Register,
        hidden: true,
        exact: true
    },
    {
        path: '/friends',
        component: Friends,
        title: 'Friends',
        exact: true,
    }
];

export default routes;