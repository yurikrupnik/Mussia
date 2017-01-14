import {bindActionCreators} from 'redux';
import * as counterActionCreators from '../actions/user';

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
