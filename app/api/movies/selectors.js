import { bindActionCreators } from 'redux';
import { selector } from './config';
import * as actions from './actions';

function mapToProps(state, ownProps) {
    console.log('selector', selector);
    return { [selector]: state[selector] };
}

const dispatchActions = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export {
    mapToProps,
    dispatchActions,
    actions
};
