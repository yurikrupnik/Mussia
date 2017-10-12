import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import withMaterial from '../Utils/Material';
import withProvider from '../Utils/Provider';
import Nav from '../Nav';
import routes from '../../routes';

const Layout = () => {
    return (
        <div>
            <Nav />
            <Switch>
                {routes.map((route, i) => {
                    return (<Route key={i} path={route.path} exact={route.exact} component={route.component}/>);
                })}
            </Switch>
        </div>
    );
};


class App extends Component {

    static propTypes = {
        initialState: PropTypes.object,
        userAgent: PropTypes.string.isRequired
    };

    render() {
        const {initialState, userAgent} = this.props;
        const Elem = withMaterial(withProvider(Layout, initialState), userAgent);
        return <Elem />
    }
}


export default App;
