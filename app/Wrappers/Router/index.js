// all routes will be wrapped in material provider
import React ,{Component} from 'react';
import PropTypes from 'prop-types';
// import {Router, browserHistory, RouterContext} from 'react-router';
// import {routes} from '../../routes';
import Material from '../Material';
import {
    BrowserRouter as Router,
    Route,
    Link,
    PrivateRoute,
    // withRouter,
    Switch,
    StaticRouter
} from 'react-router-dom'

import {withRouter} from 'react-router';

// import Payments from '../../api/payments/component'

const Nav = ({match}) => (
    <div>
        <h1>App</h1>
        <ul>

            <div>
                <Link to="/" from="/payments"/>
            </div>

        </ul>
    </div>
);

const App = (props) => (
    <div>
        <Nav {...props}/>

    </div>
);


let Ele = (props) => {
    // handle server render and client render
    // let RoutesWrapper = global.window ?
    //     App :
    return (<StaticRouter context={{}} />)
    // return (
    // );
    // return RoutesWrapper
    // return (
    //     <Material component={RoutesWrapper}/>
    // )
};

class Shit extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            withRouter(<Ele/>)
        )
    }
}

export default Shit;
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