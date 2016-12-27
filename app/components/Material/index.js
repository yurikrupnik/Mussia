import React, {Component} from 'react';
import App from '../App/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
require("react-tap-event-plugin")();

export default () => {
    return (
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    )
}

