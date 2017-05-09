import React, {Component} from 'react';

import PaymentsC from '../../../api/payments/component';
import request from '../../../api/payments/request';
import {
    BrowserRouter as Router,
    Route,
    Link,
    PrivateRoute,
    withRouter,
    Switch,
    StaticRouter
} from 'react-router-dom';


import Counter from '../Counter';
import Counters from '../Counters';
import Register from '../Register';
// import Settings from '../../Smart/Settings';
import Dashboard from '../Dashboard';
import Topics from '../Topics';

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

let conected = smartComponent(request, PaymentsData);

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
        path: '/register',
        component: Register,
        title: 'Register',
        exact: true
    },
    {
        path: '/payments',
        component: PaymentsC,
        title: 'Payments',
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

export default routes;