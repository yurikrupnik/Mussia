import React, {Component, PropTypes} from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Register.scss';
import {connect} from 'react-redux';
import {getCounters, dispatchActions} from '../../redux/selectors/counters';

class Counters extends Component {
    static propTypes = {
        // title: PropTypes.string.isRequired,
        counters: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };

    handlePlus(index) {
        const {actions} = this.props;
        actions.incrementCounter(index);
    }

    handleMinus(index) {
        const {actions} = this.props;

        actions.decrementCounter(index);
    }

    render() {
        const {title, counters, actions} = this.props;

        return (
            <div >
                <div >
                    <h1>{title || 'default title'}</h1>
                    <button onClick={actions.addCounter}>Add counter</button>
                    <button onClick={actions.removeCounter}>Remove counter</button>
                    <div>{counters.map((v,i) => {
                        return (
                            <div key={i}>
                                <h1>{v}</h1>
                                <button onClick={this.handlePlus.bind(this, i)}>+</button>
                                <button onClick={this.handleMinus.bind(this, i)}>-</button>
                            </div>
                        )
                    })}</div>
                </div>
            </div>
        );
    }
}
// Register.propTypes = {title: PropTypes.string.isRequired};

// export default withStyles(Register, s);

export default connect(getCounters, dispatchActions)(Counters);
