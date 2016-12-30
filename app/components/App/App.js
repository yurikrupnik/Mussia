import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Counter from './../counter/counter';
import Login from './../Login/Login';
import payments from '../../api/payments/request';
import './App.scss';
let history = global.document ? createBrowserHistory() : createMemoryHistory();

import { Router, IndexRoute, Route, Link, browserHistory} from 'react-router'; // todo work on it!
import createMemoryHistory from 'history/lib/createMemoryHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';
export let history = () => global.document ? createBrowserHistory() : createMemoryHistory();

const Love = React.createClass({
    componentDidMount() {
        payments.getCount().then(count => console.log('count', count));
    },

    handlePaymentsReturn(response) {

    },

    handleClick(e) {
        return payments.getPayments().then(function (data) {
            console.log('data', data);
        });
    },
    render() {
        return (
            <div>
                <h1>App</h1>
                <Counter/>
                <Login />
                {/*<ul>*/}
                <li><Link to="/login">login</Link></li>
                <li><Link to="/payments">payments</Link></li>
                {/*</ul>*/}
                <RaisedButton onClick={this.handleClick} label="Default"/>
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
            <div>payments</div>
        )
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <Route path="/" component={Love}>
                    <IndexRoute component={Love}/>
                </Route>

            </Router>
        );
    }
}