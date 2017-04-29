import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link,
    PrivateRoute,
    withRouter,
    Switch,
    StaticRouter
} from 'react-router-dom'

const Topics = ({match}) => {
    return (
        <Router>
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>
                            Components
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>
                            Props v. State
                        </Link>
                    </li>
                </ul>

                <Route path={`${match.url}/:topicId`} component={Topic}/>
                <Route exact path={match.url} render={() => (
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        </Router>
    )
};

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);


import Payments from '../../api/payments/component';
import Counter from '../Counter';
import Counters from '../Counters';
import Register from '../Register';

const Dashboard = (props) => {
    // console.log('props', props);

    return (<div>Dashboard</div>)
};

const Nav = (props) => {
    // console.log('props', props);

    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/payments">Payments</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/counters">Counters</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    );
};

const PaymentsData = ({match, data, methods}) =>{
    console.log('methods', methods);

    return ( data ?
            <div>
                <div>count {data.length}</div>
                {data.length > 0 &&
                <div>
                    {data.map((val, i) => {
                        let to = `${match.url}/${val._id}`;
                        return <div key={i}>
                            <Link to={to}>
                                {to}
                            </Link>
                            <h2>{val.name}</h2>
                            <div>{val.info}</div>
                            <button onClick={methods.delete.bind(null, val)}>delete</button>
                        </div>
                    })}
                </div>}
            </div> : null
    )
};
const Create = (props) => {
    const schema = {
        props: {
            name: {
                type: 'string',
            },
            info: {
                type: 'string'
            }
        }
    };
    return (
        <form name={'nir'}>
            <input type="text"/>
            <input type="text"/>
        </form>
    )
};

const routes = [

    {
        path: '/',
        component: Dashboard,
        // routes: [
        //     {
        //         path: '/topics',
        //         component: Topics,
        //         exact: true
        //     },
        //     {
        //         path: '/counter',
        //         component: Counter
        //     },
        //     {
        //         path: '/counters',
        //         component: Counters
        //     },
        //     {
        //         path: '/register',
        //         component: Register
        //     },
        //     {
        //         path: '/payments',
        //         component: Payments
        //     }
        // ],
        exact: true
    },
    {
        path: '/topics',
        component: Topics,
        exact: true
    },
    {
        path: '/counter',
        component: Counter
    },
    {
        path: '/counters',
        component: Counters
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/payments',
        component: Payments,
        routes: [
            {
                path: '/payments/create',
                component: Create
            },
            {
                path: '/payments/data',
                component: PaymentsData
            }
        ]
    }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
    <Route path={route.path} exact={route.exact} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
);

const RouteConfigExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/tacos">Tacos</Link></li>
                <li><Link to="/sandwiches">Sandwiches</Link></li>
            </ul>

            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
);
const Rou = () => {
    return (
        <div>
            <Router>
                <div>
                    <Nav/>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                </div>
            </Router>
        </div>
    )
};


import MaterialWrapper from '../Material';
import ProviderWrapper from '../Provider';

class App extends Component {
    static propTypes = {
        initialState: PropTypes.object, // not required on server side rendering
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {initialState} = this.props; // pass initial state of the app - redux currently
        return (
            <MaterialWrapper component={<ProviderWrapper initialState={initialState} component={<Rou/>}/>}/>
        );
    }
}

export default App;