/**
 * Created by yurikrupnik on 22/05/2017.
 */
import {
    BrowserRouter as Router,
    Route,
    Link,
    PrivateRoute,
    withRouter,
    Switch,
    StaticRouter
} from 'react-router-dom';
import React, {Component} from 'react';
class PaymentsList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        const {actions, location, match} = this.props;
        const {pathname, query, search} = location;

        const readConfig = {
            query: query,
            params: {},
            fields: ['name', 'info']
        };

        actions.read(readConfig);
    }

    // handleDelete(e, id){
    //     const {actions, location, match} = this.props;
    //     console.log('e', e);
    //     console.log('id', id);
    //
    //     actions.delete({}, {}, [])
    // }

    render() {
        const payments = this.props.payments;
        const {match} = this.props;
        console.log('payments', payments);

        const {data, count} = payments;
        return (
            <div> payments {
                data.map(function (v, i) {
                    return <div key={i}>
                        <Link to={`${match.url}/${v._id}`}>{v.title}</Link>
                    </div>
                })
            }</div>
        )
    }
}
//getStateBySelector(selector), createDispatcherByResource(Resource)
import {connect} from 'react-redux';

import {getPayments, dispatchActions} from '../../../redux/selectors/payments';
import {getUser} from '../../../redux/selectors/user';
function gets(state, ownProps) {
    return {
        ...getUser(state, ownProps),
        ...getPayments(state, ownProps)
    }
}
export default connect(gets, dispatchActions)(PaymentsList);
import smartComponent from '../index';
import request from '../../../api/payments/request';

// export default smartComponent(request, PaymentsList);
// export default PaymentsList;