import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Counter from './../counter/counter';
import Login from './../Login/Login';
import payments from '../../api/payments/request';
import './App.scss';


import { Router, Route, Link} from 'react-router'; // todo work on it!
// import createBrowserHistory from 'history/lib/createBrowserHistory';
// const history = createBrowserHistory();

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
                {/*<li><Link to="/login">login</Link></li>*/}
                {/*<li><Link to="/counter">counter</Link></li>*/}
                {/*</ul>*/}
                <RaisedButton onClick={this.handleClick} label="Default"/>
            </div>
        )
    }
});

// <Router history={hashHistory}>
// <Route path="/" component={Love}>
// <Router path="/counter" component={Counter}/>
// </Route>
// <Router path="/login" component={Login}/>
// </Router>
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Love />
        );
    }
}