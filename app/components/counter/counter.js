import React, {Component, PropTypes} from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import './counter.scss';
import {connect} from 'react-redux';
import {getCounter, dispatchActions} from '../../redux/selectors/counter';

class Counter extends Component {
    constructor() {
        super();
        this.state = {counter: 50};
    }

    static propTypes = {
        // title: PropTypes.string,
        // counter: PropTypes.number.isRequired,
        // actions: PropTypes.object.isRequired
    };

    handlePlus() {
        let {counter} = this.state;
        this.setState({counter: counter + 1});
        // const {actions} = this.props;
        // actions.plus();
    }

    handleMinus() {
        // const {actions} = this.props;
        let {counter} = this.state;
        this.setState({counter: counter - 1});
        // actions.minus();
    }

    render() {
        return (
            <div >
                <div>
                    <h2>hi</h2>
                    <h1>{this.state.counter}</h1>
                    <div>
                        <button onClick={this.handlePlus.bind(this)}>+</button>
                        <button onClick={this.handleMinus.bind(this)}>-</button>
                    </div>
                </div>
            </div>
        );
    }
}


// export default connect(getCounter, dispatchActions)(Counter);
export default Counter;