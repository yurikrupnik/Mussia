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

    handleClick(e){
        console.log('e', e.type);
    }

    render() {
        return (
            <div>
                <p>sga</p>
                <p>ss</p>
                <span>some s  smore</span>
                <img src="download.jpeg" alt="no image found"/>
                <button onClick={this.handleClick.bind(this)}>help</button>
            </div>
        );
    }
}