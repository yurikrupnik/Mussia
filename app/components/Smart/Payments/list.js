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
        // const {actions} = this.props;
        const {actions, location, match} = this.props;
        const {pathname, query, search} = location;
        actions.read(query, {yalublu: true}, {
            fields: ['name', 'info']
        });
    }

    handleDelete(e, id){
        const {actions, location, match} = this.props;
        console.log('e', e);
        console.log('id', id);

        actions.delete({}, {}, [])
    }

    render() {
        const payments = this.props[PaymentsList.selector];
        const {match} = this.props;
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

import smartComponent from '../index';
import request from '../../../api/payments/request';
export default smartComponent(request, PaymentsList);