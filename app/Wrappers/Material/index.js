import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
require("react-tap-event-plugin")();

import Router from '../../Router/Router';

// export default class Material extends Component {
//     // getChildContext() {
//     //     return { muiTheme: getMuiTheme({
//     //         userAgent: 'all'
//     //     }) };
//     // }
//     // render()
// }

export default () => {
    // let agent = global.navigator && global.navigator.userAgent;
    // console.log('agent', agent);

    const muiTheme = getMuiTheme({
        userAgent: 'all'
    });

    // getChildContext() {
    //     return { muiTheme: getMuiTheme({
    //         userAgent: 'all'
    //     }) };
    // }
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router />
        </MuiThemeProvider>
    )
}

