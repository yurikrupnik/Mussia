import {bindActionCreators} from 'redux';
import * as counterActionCreators from '../actions/counters';


const getCounters = (state, ownProps) => {
    const {counters} = state;
    return {counters};
};
const getCounter = (state, ownProps) => {
    const {counter} = state;
    return {counter};
};

const getBoth = (state, ownProps) => {
    const counter = getCounter(state);
    const counters = getCounters(state);
    return {counter, counters}
};


const dispatchActions = (dispatch) => {
    return {actions: bindActionCreators(counterActionCreators, dispatch)}
};

export {
    getCounters,
    dispatchActions
}
