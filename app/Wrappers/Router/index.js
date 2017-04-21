// all routes will be wrapped in material provider
import React from 'react';
import PropTypes from 'prop-types';
// import {Router, browserHistory, RouterContext} from 'react-router';
import {routes} from '../../routes';
import Material from '../Material';
import {
    BrowserRouter as Router,
    Route,
    Link,
    PrivateRoute,
    withRouter,
    Switch,
    StaticRouter
} from 'react-router-dom'



import Root from '../../Wrappers/Root/Root'
import Payments from '../../api/payments/component'

export default (props) => {
    // handle server render and client render
    let RoutesWrapper = global.window ?
        (<Router>
            <Switch>
                <Route to="/payments" render={(val => {
                    return (<Payments/>)
                })} />
            </Switch>
        </Router>) :
        <StaticRouter {...props} />;

    return (
        <Material component={RoutesWrapper}/>
    )
};
// import { withRouter } from 'react-router'

// A simple component that shows the pathname of the current location
// class ShowTheLocation extends React.Component {
//     static propTypes = {
//         match: PropTypes.object.isRequired,
//         location: PropTypes.object.isRequired,
//         history: PropTypes.object.isRequired
//     }
//
//     render() {
//         const {match, location, history} = this.props
//
//         return (
//             <div>You are now at {location.pathname}</div>
//         )
//     }
// }
//
// // Create a new component that is "connected" (to borrow redux
// // terminology) to the router.
// export default withRouter(ShowTheLocation);