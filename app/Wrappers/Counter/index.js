import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getCounter, dispatchActions} from '../../redux/selectors/counter';
import RaisedButton from 'material-ui/RaisedButton';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        counter: PropTypes.number.isRequired,
        actions: PropTypes.object.isRequired
    };

    handlePlus() {
        const {actions} = this.props;
        actions.plus();
    }

    handleMinus() {
        const {actions} = this.props;
        actions.minus();
    }

    render() {
        return (
            <div >
                <div>
                    <img src="download.jpeg" alt="gs"/>
                    <h1>{this.props.counter}</h1>
                    <RaisedButton label="Default"/>
                    <div>
                        <button onClick={this.handlePlus.bind(this)}>+</button>
                        <button onClick={this.handleMinus.bind(this)}>-</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(getCounter, dispatchActions)(Counter);
