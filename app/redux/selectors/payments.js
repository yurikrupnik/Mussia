import {bindActionCreators} from 'redux';
import * as paymentsActionCreators from '../actions/payments';

function getPayments(state, ownProps) {
    console.log('ownProps', ownProps);

    const {payments, user} = state;
    // const {items, isFetching} = state.payments;
    // const {user} = state.user;
    return {
        items: payments.items,
        isFetching: payments.isFetching,
        user
    }
}


const dispatchActions = (dispatch) => {
    return {actions: bindActionCreators(paymentsActionCreators, dispatch)}
};

export {
    getPayments,
    dispatchActions
}
