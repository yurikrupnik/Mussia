import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Counter extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        // title: PropTypes.string,
        // counter: PropTypes.number.isRequired,
        // actions: PropTypes.object.isRequired
    };

    handlePlus() {
        // const {actions} = this.props;
        // actions.plus();
        console.log('mi');

    }

    handleMinus() {
        console.log('mu');

        // const {actions} = this.props;
        // actions.minus();
    }


    render() {
        return (
            <div id="counter">
                <div>
                    <h1>2</h1>
                    <div>
                        <button onClick={this.handlePlus.bind(this)}>+</button>
                        <button onClick={this.handleMinus.bind(this)}>-</button>
                    </div>
                </div>
            </div>
        );
    }
}

// if (document) {
//     render(<Counter/>, document);
// }
