// import React, {Component} from 'react';
// // import PropTypes from 'prop-types';
// // import FlatButton from 'material-ui/FlatButton';
// // import {
// //     BrowserRouter as Router,
// //     Route,
// //     Link,
// //     PrivateRoute,
// //     withRouter,
// //     Switch,
// //     StaticRouter
// // } from 'react-router-dom';
// // import Header from '../Header';
// // import RouteWithSubRoutes from '../../Utils/RouteWithRoutes';
//
import routes from '../App/routes';
// import Main from '../Main';
import MaterialWrapper from '../../Utils/Material';
import ProviderWrapper from '../../Utils/Provider';
//
// const App = ({initialState}) => (
//     {/*<MaterialWrapper component={<Main routes={routes}/>}/>*/}
// );
//
// export default App;
import React, {Component} from 'react';
import Header from '../Header';
import {staticRouter as Router, Route, Link} from 'react-router-dom';
import RouteWithSubRoutes from '../../Utils/RouteWithRoutes';

const Main = ({routes}) => {
    console.log('routes', routes);
    return (
        <div>
            {routes.map(route => {
                return (<Route key={route.path} path={route.path} exact component={route.component} />);
            })}
        </div>
    );
};

export default ({initialState}) => {
    console.log('initialState', initialState);
    return (
        <ProviderWrapper component={<MaterialWrapper initialState={initialState} component={<Main routes={routes}/>}/>} />
    );
}