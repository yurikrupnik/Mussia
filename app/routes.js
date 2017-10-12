import React from 'react';
import ResultsContainer from './api/results/container';
import QuizzesContainer from './api/quizzes/container';
import AuthContainer from './api/auth/container';
import Quiz from './components/Quiz';
import NoMatch from './components/NoMatch';
import Votes from './components/Votes';
import Hello from './components/Hello';

const routes = [
    {
        path: '/results',
        component: (props) => {
            return <ResultsContainer><Votes/><Hello/></ResultsContainer>
        },
    },
    {
        path: '/quiz/:quiz_id',
        component: (props) => {
            return <QuizzesContainer><Quiz/></QuizzesContainer>;
        },
    },
    {
        path: '/register',
        component: (props) => {
            return <AuthContainer />
        }
    },
    {
        path: '/*',
        component: NoMatch
    }
];

export default routes;