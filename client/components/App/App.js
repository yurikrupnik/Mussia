import request from 'superagent';
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Counter from '../Counter';
import Login from '../Login';

import payments from '../../api/payments';
import './App.css';
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
            <div>
                <Login />
                <Counter />
                <p>vpov</p>
                <p className="title">ssssss</p>
                <span>some s  smore</span>
                <RaisedButton onClick={this.handleClick.bind(this)} label="Default"/>
                <img src="download.jpeg" alt="no image found"/>
                <button onClick={this.handleClick.bind(this)}>help</button>
            </div>
        );
    }
}