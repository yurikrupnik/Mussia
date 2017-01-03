import {bindActionCreators} from 'redux';
import * as counterActionCreators from '../actions/payments';

function getPayments(state, ownProps) {
    const {items, isFetching} = state.payments;
    return {
        items,
        isFetching
    }
}


const dispatchActions = (dispatch) => {
    return {actions: bindActionCreators(counterActionCreators, dispatch)}
};

export {
    getPayments,
    dispatchActions
}
