import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Counter from './../counter/counter';
import Login from './../Login/Login';
import payments from '../../api/payments/request';
import './App.scss';
let history = global.document ? createBrowserHistory() : createMemoryHistory();

import { Router, IndexRoute, Route, Link} from 'react-router'; // todo work on it!

import createMemoryHistory from 'history/lib/createMemoryHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createHistory } from 'history'
// export let history = () => global.document ? createBrowserHistory() : createMemoryHistory();

const Love = React.createClass({
    componentDidMount() {
        payments.getCount().then(count => console.log('count', count));
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
                    <Link to="/bitch">payments</Link>
                </ul>
            </div>
        )
    }
});


// {/*let Payments = () => (<div>payments</div>);*/}

class Payments extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>payments area</div>
        )
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    handleError(err) {
        console.log('err',err );

    }
    render() {
        let routes = {
            path: '/',
            location: '/',
            component: Love
        };
        return (
            <Router routes={routes} history={createMemoryHistory()} onError={this.handleError.bind(this)}/>
        );
    }
}