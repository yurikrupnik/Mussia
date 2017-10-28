import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withReduxStore from '../HOC/withReduxStore';
import withSubRoutes from '../HOC/withSubRoutes';
import Material from '../wrappers/material';
import configureStore from '../../redux/store';
import Header from './header';
import routes from './routes';

class App extends Component {

    static propTypes = {
        initialState: PropTypes.object.isRequired,
        userAgent: PropTypes.string.isRequired
    };

    render() {
        const {initialState, userAgent} = this.props;
        const store = configureStore(initialState);
        const Root = withReduxStore(withSubRoutes(Header, routes), store);
        return (
            <Material userAgent={userAgent} >
                <Root />
            </Material>
        );
    };
}

export default App;
