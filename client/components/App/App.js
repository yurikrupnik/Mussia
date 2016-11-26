import request from 'superagent';
import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        request.get('/payments/count', (err, res) => res.body);
    }

    handleClick(e){
        console.log('ess', e.type);
    }

    render() {
        return (
            <div>
                <p>a</p>
                <p>ssssss</p>
                <span>some s  smore</span>
                <img src="download.jpeg" alt="no image found"/>
                <button onClick={this.handleClick.bind(this)}>help</button>
            </div>
        );
    }
}