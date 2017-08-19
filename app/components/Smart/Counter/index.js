import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {getCounter, dispatchActions} from '../../../redux/selectors/counter';
import Count from '../../counter/counter';

class CounterWrapper extends Component {
    static propTypes = {
        counter: PropTypes.number.isRequired,
        actions: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }


    handlePlus() {
        const {actions} = this.props;
        actions.plus();
    }

    handleMinus() {
        const {actions} = this.props;
        actions.minus();
    }

    render() {
        const {counter} = this.props;
        return (
            <Count counter={counter} plus={this.handlePlus.bind(this)} minus={this.handleMinus.bind(this)}/>
        );
    }
}

export default connect(getCounter, dispatchActions)(CounterWrapper);
