import {bindActionCreators} from 'redux';
import * as actions from './actions';

function mapToProps(state, ownProps) {
    console.log('state', state);

    return state.api.users;
}

const dispatchActions = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export {
    mapToProps,
    dispatchActions,
    actions
}
