import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/loading';


const setLoading = (state, ownProps) => {
    return state.loading;
};

const dispatchActions = (dispatch) => {
    return {actions: bindActionCreators(actionCreators, dispatch)}
};

export {
    setLoading,
    dispatchActions
}
