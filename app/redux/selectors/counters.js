import {bindActionCreators} from 'redux';
import * as counterActionCreators from '../actions/counters';


const getCounters = (state, ownProps) => {
    const counters = state.counters;
    return {counters};
};

const dispatchActions = (dispatch) => {
    return {actions: bindActionCreators(counterActionCreators, dispatch)}
};

export {
    getCounters,
    dispatchActions
}
