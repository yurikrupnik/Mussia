import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import FlatButton from 'material-ui/FlatButton';
// import resource from './request';
import {
    BrowserRouter as Router,
    Route,
    Link,
    PrivateRoute,
    withRouter,
    Switch,
    StaticRouter
} from 'react-router-dom'

import routess from './routes';
import RouteWithSubRoutes from '../../Utils/RouteWithRoutes';
import smartComponent from '../index';
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


const Payment = ({val, index}) => {
    return (
        <div className="payments">
            <div key={index}>
                <h2>{val.title}</h2>
                <button >delete</button>
            </div>
        </div>
    )
};

class Payments extends Component {

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
    handleDelete(id, e) {
        console.log('e', e);

        const {actions, location, match} = this.props;
        const {pathname, query, search} = location;
        debugger
        actions.delete(query, {yalublu: true}, [id]);
    }

    render() {
        const {match, routes, } = this.props;
        console.log('routes', routes);
        console.log('mathch', match);

        const payments = this.props[Payments.selector]; // smartComponent assigns selector
        // const {match} = this.props;
        const {data, count} = payments;
        return (
            <Router>
                <div>
                    <h5>Payments</h5>
                    <div>
                        <ul>
                            <li><Link to={`${match.url}/create`}>create</Link></li>
                        </ul>
                        <div>
                            {data ? data.map(val => (<div key={val._id}>
                                <h2>{val.title}</h2>
                                <button onClick={this.handleDelete.bind(this, val._id)}>delete</button>
                            </div>)) : <div></div>}
                        </div>
                    </div>
                    {routess.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                </div>
            </Router>

        )
    }
}
import request from '../../../api/payments/request';
export default smartComponent(request, Payments);