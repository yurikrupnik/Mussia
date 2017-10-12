import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import withMaterial from '../Utils/Material';
import withProvider from '../Utils/Provider';
import routes from '../../routes';

const NotFound = () => (
    <Status code={404}>
        <div>
            <h1>Sorry, can’t find that.</h1>
        </div>
    </Status>
);

// somewhere else


const Layout = () => {
    return (
        <div>
            <div>Layout shit</div>
            <nav>nav here</nav>
            <Switch>
                {routes.map((route, i) => {
                    return (<Route key={i} path={route.path} exact={route.exact} component={route.component}/>);
                })}
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
};

const App1 = () => {
    return (<div>
        <div>hello from ap 1</div>
    </div>);
};

class App extends Component {

    static propTypes = {
        initialState: PropTypes.object
    };

    render() {
        const {initialState} = this.props;
        const Elem = withMaterial(withProvider(Layout, initialState));
        return <Elem />
    }
}


export default App;
