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
class PaymentsData extends Component {
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
        const payments = this.props[PaymentsData.selector];
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
let conected = smartComponent(request, PaymentsData);

const Create = (props) => {
    const schema = {
        props: {
            name: {
                type: 'string',
            },
            info: {
                type: 'string'
            }
        }
    };
    return (
        <div>
            <h4>Create New Payment</h4>
            <form>
                <input type="text" />
                <input type="text"/>
            </form>
        </div>
    )
};

const Edit = ({match}) => {
    return (
        <h3>ID: {match.params.id}</h3>
    )
};
export default [
    {
        path: '/payments/create',
        component: Create,
        exact: true
    },
    {
        path: '/payments/data',
        component: conected,
        exact: true,
    },
    {
        path: '/payments/data/:id',
        component: Edit,
        exact: true
    }
]