import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import ResultsContainer from '../../../api/results/container';
import QuizzesContainer from '../quizzes/container';
import AuthContainer from '../../../api/auth/container';
import Votes from '../../Votes';
import Hello from '../../Hello';
import Settings from '../Settings';
import NoMatch from '../NoMatch';
import Admin from '../admin';
import Quizzes from '../quizzes';

const routes = [
    {
        path: '/dashboard',
        component: () => {
            return <div>dashboard</div>
        }
    },
    {
        path: '/admin',
        component: Admin
    },
    {
        path: '/results',
        component: (props) => {
            return <div>results will be here</div>
            // return <ResultsContainer><Votes/><Hello/></ResultsContainer>
        },
    },
    {
        path: '/quizzes',
        component: Quizzes
    },
    {
        path: '/register',
        component: (props) => {
            return <AuthContainer />
        },
    },
    {
        path: '/settings',
        component: Settings
    },
    {
        path: '/*',
        component: NoMatch
    }
];

export default routes;