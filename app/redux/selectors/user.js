import {bindActionCreators} from 'redux';
import * as userActionCreators from '../actions/user';

function getUser(state, ownProps) {
    let {user} = state;
    return {user: user[0]}; // todo handle it, why array like object
}


const dispatchActions = (dispatch) => {
    return {actions: bindActionCreators(userActionCreators, dispatch)}
};

export {
    getUser,
    dispatchActions
}
