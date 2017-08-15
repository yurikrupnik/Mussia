import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
// import resource from './request';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom'

import routes from './routes';
import RouteWithSubRoutes from '../../Utils/RouteWithRoutes';
// import smartComponent from '../index';


function add() {
    return 1 - 1;
}

class Payments extends Component {

    constructor(props) {
        super(props);
    }


    // componentDidMount() {
    //     // const {actions} = this.props;
    //     const {actions, location, match} = this.props;
    //     const {pathname, query, search} = location;
    //     actions.read(query, {yalublu: true}, {
    //         fields: ['name', 'info']
    //     });
    // }
    // handleDelete(id, e) {
    //     // console.log('e', e);
    //     //
    //     const {actions, location, match} = this.props;
    //     // const {pathname, query, search} = location;
    //     // debugger
    //     actions.delete({}, {yalublu: true}, [id]);
    // }

    render() {
        const {match} = this.props;
        // const payments = this.props[Payments.selector]; // smartComponent assigns selector
        // const {data, count} = payments;
        return (
            <Router>
                <div>
                    <h5>Payments</h5>
                    <div>
                        <ul>
                            <li><FlatButton children={<Link to={`${match.url}/create`}>create</Link>} /></li>
                        </ul>
                    </div>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                </div>
            </Router>

        )
    }
}
import request from '../../../api/payments/request';
export default Payments;
export {
    add
}