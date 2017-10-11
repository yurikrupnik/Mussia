import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import tabEvent from 'react-tap-event-plugin';
tabEvent();

// const muiTheme = getMuiTheme({
//     // palette: {
//     //     primary1Color: green500,
//     //     primary2Color: green700,
//     //     primary3Color: green100,
//     // },
// }, {
//     // avatar: {
//     //     borderColor: null,
//     // },
//     // userAgent: req.headers['user-agent'],
// });

const muiTheme = getMuiTheme(lightBaseTheme);

function withMaterial(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <MuiThemeProvider muiTheme={muiTheme}>
                    <WrappedComponent />
                </MuiThemeProvider>
            )
        }
    }
}

export default withMaterial;