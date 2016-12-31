import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Counter from './../counter/counter';
import Login from './../Login/Login';
import payments from '../../api/payments/request';
import './App.scss';

import {Router, Link, browserHistory} from 'react-router'; // todo work on it!

const Love = React.createClass({
    componentDidMount() {
        // payments.getCount().then(count => console.log('count', count));
    },

    handlePaymentsReturn(response) {

    },

    handleClick(e) {
        // return payments.getPayments().then(function (data) {
        //     console.log('data', data);
        // });
    },
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <Link to="/">Dashboard</Link>
                    <Link to="/demo">demo route</Link>
                    <Link to="/pay">pay</Link>
                    <Link to="/login">login</Link>
                    <Link to="/logout">logout</Link>
                </ul>
                {this.props.children}
            </div>
        )
    }
});


let Payments = () => (<div>payments</div>);

class Pay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Pay area</div>
        )
    }
}
export let routes = {
    path: '/',
    component: Love,
    childRoutes: [
        {
            path: '/payments',
            component: Payments
        },
        {
            path: 'pay',
            component: Pay
        }
    ],
    // getChildRoutes(location, cb) {
    //     console.log('location', location);
    //     console.log('cb', cb);
    //     require.ensure([], (require) => {
    //         // cb(null, [ require('./AboutRoute') ])
    //     })
    // },
    // indexRoute: {
    //     component: Pay
    // }
};

export default () => <Router history={browserHistory}>{routes}</Router>;
