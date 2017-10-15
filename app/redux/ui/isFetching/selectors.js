
import {bindActionCreators} from 'redux';
import * as actions from './actions';

function mapToProps(state, ownProps) {
    return state.isFetching; // todo handle it, why array like object
}

const dispatchActions = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export {
    mapToProps,
    dispatchActions,
    actions
}
