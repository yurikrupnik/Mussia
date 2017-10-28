import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import withMaterialUi from '../HOC/withMaterialUi';
import withReduxStore from '../HOC/withReduxStore';
import withSubRoutes from '../HOC/withSubRoutes';
import configureStore from '../../redux/store';
import Header from './header';
import routes from './routes';

import Material from '../wrappers/material';
// import Redux from '../wrappers/redux';

class App extends Component {

    static propTypes = {
        initialState: PropTypes.object.isRequired,
        userAgent: PropTypes.string.isRequired
    };

    render() {
        const {initialState, userAgent} = this.props;
        const store = configureStore(initialState);
        const Root = withReduxStore(withSubRoutes(Header, routes), store);
        // const Root = withSubRoutes(Header, routes);
        return (
            <Material userAgent={userAgent} >
                <Root />
            </Material>
        );
    };
}

export default App;
