import request from 'superagent';
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Counter from '../Counter'
import './App.css';
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        request.get('/payments/count', (err, res) => res.body);
    }

    handleClick(e) {
        console.log('ess', e.type);
    }

    render() {
        return (
            <div>

                <Counter />
                <p>vpov</p>
                <p className="title">ssssss</p>
                <span>some s  smore</span>
                <RaisedButton label="Default"/>
                <img src="download.jpeg" alt="no image found"/>
                <button onClick={this.handleClick.bind(this)}>help</button>
            </div>
        );
    }
}