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
const Pays = ({match, list}) => (<div><h2>payments</h2>
    {
        list.map((v, i) => {
            return <div key={i}>
                <Link to={`${match.url}/${v._id}`}>{v.title}</Link>
                <div><button >delete</button></div>
            </div>
        })
    }
</div>);
class PaymentsList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {actions, location, match} = this.props;
        // console.log('', );

        // console.log('location', location);
        const {pathname, query, search} = location;
        // console.log('query', query);
        // console.log('search', search);
        // console.log('pathname', pathname);
        const readConfig = {
            query: query,
            params: {},
            fields: ['name', 'info']
        };

        actions.read(readConfig);
    }

    handleDelete(id, e){
        const {actions, location, match} = this.props;
        actions.deleteById(id)
    }

    render() {
        const {payments} = this.props;
        const {match, actions} = this.props;
debugger
        // const {data, count} = payments;
        return (
            <div>pao</div>
        );
        // return (payments.map(v => {
        //     return (<div>{v.title}</div>)
        // }))
    }
}
//getStateBySelector(selector), createDispatcherByResource(Resource)
import {connect} from 'react-redux';

import {getPayments, dispatchActions} from '../../../redux/data/payments/selectors';
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