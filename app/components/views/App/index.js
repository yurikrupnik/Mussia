import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withMaterial from '../../HOC/Material/index';
import withProvider from '../../HOC/Provider/index';
import withLayout from '../../HOC/Layout/index';
import Nav from '../../Nav/index';
import routes from './routes';

class App extends Component {

    static propTypes = {
        initialState: PropTypes.object.isRequired,
        userAgent: PropTypes.string.isRequired
    };

    render() {
        const {initialState, userAgent} = this.props;
        const Root = withMaterial(withProvider(withLayout(Nav, routes), initialState), userAgent);
        return <Root />
    }
}


export default App;
