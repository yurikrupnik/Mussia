import React from 'react';
import Header from '../Header';
import {BrowserRouter as Router} from 'react-router-dom';
import RouteWithSubRoutes from '../../Utils/RouteWithRoutes';
const Main = ({routes}) => (
    <div>
        <Router>
            <div>
                <Header/>
                <div className="container">
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                </div>
            </div>
        </Router>
    </div>
);

export default Main;