import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Counter from './../counter/counter';
import Login from './../Login/Login';
import payments from '../../api/payments/request';
import './App.scss';


import { Router, Route, Link} from 'react-router'; // todo work on it!
import createMemoryHistory from 'history/lib/createMemoryHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';

let history = global.document ? createBrowserHistory() : createMemoryHistory();
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
                <li><Link to="/counter">counter</Link></li>
                {/*</ul>*/}
                <RaisedButton onClick={this.handleClick} label="Default"/>
            </div>
        )
    }
});


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <Route path="/" component={Love} />
                <Route path="/login" component={Login} />
            </Router>
        );
    }
}