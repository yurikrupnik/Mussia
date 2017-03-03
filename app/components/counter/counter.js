import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

import './counter.scss';
export default class Counter extends Component {

    static propTypes = {
        plus: PropTypes.func.isRequired,
        minus: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div >
                <div>
                    <div className="ya-yebu">ya-yebu test</div>
                    <img src="download.jpeg" alt="gs"/>
                    <h1>{this.props.counter}</h1>
                    <RaisedButton label="Does nothing" />
                    <Link to="/counter/example" >go to counter inside payments</Link>
                    <div>
                        <button onClick={this.props.plus}>+</button>
                        <button onClick={this.props.minus}>-</button>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

