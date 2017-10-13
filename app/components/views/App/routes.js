import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import ResultsContainer from '../../../api/results/container';
import QuizzesContainer from '../../../api/quizzes/container';
import AuthContainer from '../../../api/auth/container';
// import Quiz from '../../Quiz';
import Votes from '../../Votes';
import Hello from '../../Hello';
import Settings from '../Settings';
import Quizzes from '../quizzes';
import NoMatch from '../NoMatch';

const routes = [
    {
        path: '/dashboard',
        component: () => {
            return <div>dashboard</div>
        }
    },
    {
        path: '/results',
        component: (props) => {
            return <ResultsContainer><Votes/><Hello/></ResultsContainer>
        },
    },
    {
        path: '/quizzes',
        component: Quizzes
        // component: (props) => {
        //     return <QuizzesContainer><Quiz/></QuizzesContainer>;
        // },
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