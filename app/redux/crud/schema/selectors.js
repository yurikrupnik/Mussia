import {bindActionCreators} from 'redux';
import * as actions from './actions';

const mapToProps = (state, ownProps) => {
    return state.schema;
};

const dispatchActions = (dispatch) => bindActionCreators(actions, dispatch);

export {
    mapToProps,
    dispatchActions,
    actions
}