import React from 'react';
import ResultsContainer from './api/results/container';
import QuizzesContainer from './api/quizzes/container';
import Quiz from './components/Quiz';
import Votes from './components/Votes';
import Hello from './components/Hello';


const routes = [
    {
        path: '/results',
        component: (props) => {
            // console.log('props', props);

            return <ResultsContainer><Votes/><Hello/></ResultsContainer>
        },
        exact: true
    },
    {
        path: '/quiz/:quiz_id',
        component: (props) => {
            return <QuizzesContainer><Quiz/></QuizzesContainer>;
        },
        exact: true
    }
    // {
    //     path: '/register',
    //     component: Register,
    //     exact: true
    // }
];

export default routes;