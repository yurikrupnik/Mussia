import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

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
                    <img src="download.jpeg" alt="gs"/>
                    <h1>{this.props.counter}</h1>
                    <RaisedButton label="Default"/>
                    <div>
                        <button onClick={this.props.plus}>+</button>
                        <button onClick={this.props.minus}>-</button>
                    </div>
                </div>
            </div>
        );
    }
}

