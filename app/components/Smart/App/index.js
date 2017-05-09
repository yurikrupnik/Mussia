import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {
    BrowserRouter as Router,
    Route,
    Link,
    PrivateRoute,
    withRouter,
    Switch,
    StaticRouter
} from 'react-router-dom';

import Topics from '../Topics';
import Payments from '../../../api/payments/request';
import PaymentsC from '../../../api/payments/component';
import Counter from '../Counter';
import Counters from '../Counters';
import Register from '../Register';
import Settings from '../Settings';
import Dashboard from '../Dashboard';
import Header from '../Header';


class PaymentsData extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const {actions} = this.props;
        const {actions, location, match} = this.props;
        const {pathname, query, search} = location;
        actions.read(query, {yalublu: true}, {
            fields: ['name', 'info']
        });
    }

    render() {
        const payments = this.props[PaymentsData.selector];
        const {match} = this.props;
        const {data, count} = payments;
        return (
            <div> payments {
                data.map(function (v, i) {
                    return <div key={i}>
                        <Link to={`${match.url}/${v._id}`}>{v.name}</Link>
                    </div>
                })
            }</div>
        )
    }
}

import smartComponent from '../index';

let conected = smartComponent(Payments, PaymentsData);

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

const Edit = ({match}) => {
    return (
        <h3>ID: {match.params.id}</h3>
    )
};

const routes = [
    {
        path: '/dashboard',
        component: Dashboard,
        title: 'Dashboard',
        exact: true
    },
    {
        path: '/topics',
        component: Topics,
        exact: true
    },
    {
        path: '/settings',
        component: Settings,
        exact: true
    },
    {
        path: '/counter',
        component: Counter,
        exact: true
    },
    {
        path: '/counters',
        component: Counters,
        exact: true
    },
    {
        path: '/register',
        component: Register,
        exact: true
    },
    {
        path: '/payments',
        component: PaymentsC,
        exact: true,
        routes: [
            {
                path: '/payments/create',
                component: Create,
                exact: true
            },
            {
                path: '/payments/data',
                component: conected,
                exact: true,
            },
            {
                path: '/payments/data/:id',
                component: Edit,
                exact: true
            }
        ]
    }
];

import RouteWithSubRoutes from '../../Utils/RouteWithRoutes';

const Rou = (props) => {
    return (
        <div>
            <Router>
                <div>
                    <Header/>
                    <div className="container">
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                        ))}
                    </div>
                </div>
            </Router>
        </div>
    )
};


import MaterialWrapper from '../../Utils/Material';
import ProviderWrapper from '../../Utils/Provider';

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
            <MaterialWrapper component={<ProviderWrapper initialState={initialState} component={<Rou />}/>}
            />
        );
    }
}

export default App;