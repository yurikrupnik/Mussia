import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import ResultsContainer from '../../../api/results/container';
import QuizzesContainer from '../../../api/quizzes/container';
import AuthContainer from '../../../api/auth/container';
import Quiz from '../../Quiz/index';
import NoMatch from '../../NoMatch/index';
import Votes from '../../Votes/index';
import Hello from '../../Hello/index';
import withLayout from '../../HOC/Layout/index';

const settingsRoutes = [
    {
        path: '/settings/attachment',
        component: () => {
            return <div>attachment</div>
        }
    },
    {
        path: '/settings/profiles',
        component: () => {
            return <div>profiles</div>
        }
    }
];

const settingsNav = () => {
    return (
        <div>
            <h2>Settings</h2>
            <ul>
                <li><Link to="/settings/profiles">Profiles</Link></li>
                <li><Link to="/settings/attachment">Attachment</Link></li>
            </ul>
        </div>
    )
};

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
    // {
    //     path: '/quiz/:quiz_id',
    //     component: (props) => {
    //         return <QuizzesContainer><Quiz/></QuizzesContainer>;
    //     },
    // },
    {
        path: '/register',
        component: (props) => {
            return <AuthContainer />
        },
    },
    // {
    //     path: '/sandwiches',
    //     component: () => {
    //         return <Sandwiches/>
    //     }
    // },
    // {
    //     path: '/tacos',
    //     component: (props) => {
    //         return <Tacos routes={props.routes}/>
    //     },
    //     routes: tacosRoutes
    // },
    {
        path: '/settings',
        component: (props) => {
            const Elem = withLayout(settingsNav, props.routes);
            return <Elem />
        },
        routes: settingsRoutes
    },
    {
        path: '/*',
        component: NoMatch
    }
];

export default routes;