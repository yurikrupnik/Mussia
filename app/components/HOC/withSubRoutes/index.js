
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
    return (
        <Route path={route.path} exact={route.exact} render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes}/>
        )}/>
    );
};

export default (WrappedComponent, routes = []) => {
    return class extends Component {
        render() {
            return (
                <div>
                    <WrappedComponent routes={routes}/>
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </div>
            );
        };
    };
};