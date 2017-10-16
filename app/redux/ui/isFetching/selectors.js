
import {bindActionCreators} from 'redux';
import * as actions from './actions';

function mapToProps(state, ownProps) {
    return {isFetching: state.isFetching};
}

const dispatchActions = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export {
    mapToProps,
    dispatchActions,
    actions
}
