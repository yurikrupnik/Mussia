import request from 'superagent';
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Counter from '../Counter';
import Login from '../Login';
import payments from '../../api/payments';
import './App.scss';

import { Router, Route, Link, hashHistory, browserHistory, IndexRoute} from 'react-router'; // todo work on it!
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();

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
                <ul>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/counter">counter</Link></li>
                </ul>
                <RaisedButton onClick={this.handleClick} label="Default"/>
                {this.props.children}
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
            <Router history={hashHistory}>
                <Route path="/" component={Love}>
                    <Router path="/counter" component={Counter}/>
                </Route>
                <Router path="/login" component={Login}/>
            </Router>
        );
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