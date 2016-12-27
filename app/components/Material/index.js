import React, {Component} from 'react';
import App from '../App/App';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
require("react-tap-event-plugin")();
let agent = global.navigator && global.navigator.userAgent;

const muiTheme = getMuiTheme({
//     palette: {
//         primary1Color: green500,
//         primary2Color: green700,
//         primary3Color: green100,
//     },
// }, {
//     avatar: {
//         borderColor: null,
//     },
    userAgent: agent
});
export default () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <App />
        </MuiThemeProvider>
    )
}

