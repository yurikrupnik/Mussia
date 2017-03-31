import {bindActionCreators} from 'redux';
import * as paymentsActionCreators from '../actions/payments';

function getPayments(state, ownProps) {
    console.log('ownProps', ownProps);

    const {payments} = state;
    return {
        data: payments.data,
    }
}


const dispatchActions = (dispatch) => {
    return {actions: bindActionCreators(paymentsActionCreators, dispatch)}
};

export {
    getPayments,
    dispatchActions
}
