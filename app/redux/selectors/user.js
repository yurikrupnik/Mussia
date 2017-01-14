import {bindActionCreators} from 'redux';
import * as counterActionCreators from '../actions/payments';

function getUser(state, ownProps) {
    const {user} = state.user;
    return {user}
}


const dispatchActions = (dispatch) => {
    return {actions: bindActionCreators(counterActionCreators, dispatch)}
};

export {
    getUser,
    dispatchActions
}
