import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withMaterial from './../HOC/withMaterial';
import withProvider from '../HOC/withReduxStore';
import withRoutes from './../HOC/withRoutes';
import Header from './header';
import routes from './routes';
import configureStore from '../../redux/store';

class App extends Component {

    static propTypes = {
        initialState: PropTypes.object.isRequired,
        userAgent: PropTypes.string.isRequired
    };

    render() {
        const {initialState, userAgent} = this.props;
        const store = configureStore(initialState);
        const Root = withMaterial(withProvider(withRoutes(Header, routes), store), userAgent);
        return <Root />
    }
}

export default App;
