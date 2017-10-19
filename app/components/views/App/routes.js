import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import ResultsContainer from '../../../api/results/container';
import QuizzesContainer from '../../../api/quizzes/container';
import AuthContainer from '../../../api/auth/container';
import Votes from '../../Votes';
import Hello from '../../Hello';
import Settings from '../Settings';
import NoMatch from '../NoMatch';
import Admin from '../admin';

// import Quiz from '../../Quiz';
import Quizzes from '../quizzes';

import withLayout from '../../HOC/Layout';

// export default withLayout(connect(function (state) {
//     return {user : state.users};
// })(Settings), routes);

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
        // component: Quizzes
        component: (props) => {
            console.log('route quizzes props', props);

            return <QuizzesContainer><Quizzes/></QuizzesContainer>;
        },
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