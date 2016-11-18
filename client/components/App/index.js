/**
 * Created by yurikrupnik on 18/11/2016.
 */

import request from 'superagent';

import React, {Component} from 'react';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        request.post('/payments', (err, res) => res.body);

    }

    render() {
        return (
            <div>hellllllllll</div>
        );
    }
}