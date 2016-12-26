import {bindActionCreators} from 'redux';
import * as counterActionCreators from '../actions/counter';


const getCounter = (state, ownProps) => {
    const counter = state.counter;
    return {counter};
};

const dispatchActions = (dispatch) => {
    return {actions: bindActionCreators(counterActionCreators, dispatch)}
};

export {
    getCounter,
    dispatchActions
}
