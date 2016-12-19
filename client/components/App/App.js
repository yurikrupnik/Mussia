import request from 'superagent';
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Counter from '../Counter';
import Login from '../Login';
import payments from '../../api/payments';
import './App.scss';

import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();

const Love = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/login">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
});
const About = React.createClass({
    render() {
        return <h3>About</h3>
    }
});

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
});
const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
});
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        request.get('/payments/count', (err, res) => res.body);
    }

    handlePaymentsReturn(response) {

    }

    handleClick(e) {
        return payments.getPayments().then(function (data) {
            console.log('data', data);
        });
    }

    render() {
        return (
            <Router history={history}>
                <Route path="/" component={Love}>
                    <Router path="/login" component={Login}/>
                </Route>
            </Router>
        )
        // return (
        //     <div className="">
        //         <div className="row">
        //             <div className="col-xs-4">
        //                 <div className="box">4</div>
        //             </div>
        //             <div className="col-xs-8">
        //                 <div className="box">8</div>
        //             </div>
        //         </div>
        //         <Login />
        //         <Counter />
        //         <p>vpov</p>
        //         <p className="title">ssssss</p>
        //         <span>some s  smore</span>
        //         <RaisedButton onClick={this.handleClick.bind(this)} label="Default"/>
        //         <img src="download.jpeg" alt="no image found"/>
        //         <button onClick={this.handleClick.bind(this)}>help</button>
        //     </div>
        // );
    }
}