import React, {PropTypes, Component} from 'react';
import {RouterContext} from 'react-router'
import Router from '../../Router/Router';

import configureStore from '../../redux/store/store'; // reuse wrapper
import {Provider} from 'react-redux'


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import tabEvent from 'react-tap-event-plugin';
tabEvent();

const muiTheme = getMuiTheme({
    userAgent: 'all'
});

export default class AppWrapper extends Component {
    static propTypes = {
        // actions: PropTypes.object.isRequired,
        // location: PropTypes.object.isRequired,
        state: PropTypes.object,
    };
    constructor(props) {
        super(props);
    }

    render() {
        let {state} = this.props;
        let store = configureStore(state); // state passed in the client - this is the pre load state of redux, defaults to empty object inside configureStore
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    {global.window ? <Router /> :  <RouterContext {...this.props} />}
                </MuiThemeProvider>
            </Provider>
        );
    }
}