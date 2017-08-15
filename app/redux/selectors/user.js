import {bindActionCreators} from 'redux';
import * as userActionCreators from '../actions/user';

function getUser(state, ownProps) {
    let {user} = state;
    return {user};
    //props.actions
}


const dispatchActions = (dispatch) => {
    return {actions: bindActionCreators(userActionCreators, dispatch)}
};

export {
    getUser,
    dispatchActions
}
