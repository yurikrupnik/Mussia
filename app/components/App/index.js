import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import withMaterial from '../Utils/Material';
import withProvider from '../Utils/Provider';
import routes from '../../routes';

const Layout = () => {
    return (
        <div>
            {routes.map(route => {
                return (<Route key={route.path} path={route.path} exact component={route.component}/>);
            })}
        </div>
    );
};

const App1 = () => {
    return (<div>
        <div>hello from ap 1</div>
    </div>);
};

class App extends Component {
    render() {
        const {initialState} = this.props;
        const Elem = withMaterial(withProvider(App1, initialState));
        return <Elem />
    }
}



export default App;
