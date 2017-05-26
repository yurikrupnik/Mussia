
import {bindActionCreators} from 'redux';
import * as paymentsActionCreators from '../actions/payments';

const getPayments = (state, ownProps) => {
    return {payments: state.payments};
};


const dispatchActions = (dispatch) => {
    return {actions: bindActionCreators(paymentsActionCreators, dispatch)}
};

export {
    getPayments,
    dispatchActions
}