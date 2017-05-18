import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import FlatButton from 'material-ui/FlatButton';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     PrivateRoute,
//     withRouter,
//     Switch,
//     StaticRouter
// } from 'react-router-dom';
// import Header from '../Header';
// import RouteWithSubRoutes from '../../Utils/RouteWithRoutes';

import routes from '../App/routes';
import Main from '../Main';
import MaterialWrapper from '../../Utils/Material';
import ProviderWrapper from '../../Utils/Provider';

const App = ({initialState}) => (
    <MaterialWrapper component={<ProviderWrapper initialState={initialState} component={<Main routes={routes}/>}/>}/>
);

export default App;