import {bindActionCreators} from 'redux';
import * as actions from './actions';

function mapToProps(state, ownProps) {
    // let {user} = state;
    return state.user[0]; // todo handle it, why array like object
}


const dispatchActions = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export {
    mapToProps,
    dispatchActions
}
