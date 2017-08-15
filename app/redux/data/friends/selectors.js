
import {bindActionCreators} from 'redux';
import * as paymentsActionCreators from './actions';

const getFriends = (state, ownProps) => {
    return {friends: state.friends, counter: state.counter};
};


const dispatchActions = (dispatch) => {
    return {actions: bindActionCreators(paymentsActionCreators, dispatch)}
};

export {
    getFriends,
    dispatchActions
}