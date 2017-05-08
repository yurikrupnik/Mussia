import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import resource from './request';
import {selector, url} from './config';
import {
    BrowserRouter as Router,
    Route,
    Link,
    PrivateRoute,
    withRouter,
    Switch,
    StaticRouter
} from 'react-router-dom'


import RouteWithSubRoutes from '../../components/Utils/RouteWithRoutes';

class Payments extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {match, routes} = this.props;
        return (
            <Router>
                <div>
                    <h5>Payments</h5>
                    <div>
                        <ul>
                            {
                                routes.map(function (route, i) {
                                    let path = route.path;
                                    return (
                                        <li key={i}><Link to={`${path}`}>{path}</Link></li>
                                    )
                                })
                            }
                            {/*<li><Link to={`${match.url}/create`}>create</Link></li>*/}
                            {/*<li><Link to={`${match.url}/data`}>data</Link></li>*/}
                        </ul>

                        {/*<FlatButton onClick={this.handleDelete.bind(this, selected)} label="delete many"/>*/}
                    </div>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                </div>
            </Router>

        )
    }
}

export default Payments;