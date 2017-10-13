import React, {Component} from 'react'
import {Switch} from 'react-router-dom';
import RouteWithSubRoutes from '../../Utils/RouteWithRoutes/index';

function withLayout(WrappedComponent, routes) {
    return class extends Component {
        render() {
            return (
                <div>
                    <WrappedComponent />
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                        ))}
                    </Switch>
                </div>
            )
        }
    }
}

export default withLayout;