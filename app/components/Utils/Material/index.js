import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import tabEvent from 'react-tap-event-plugin';
tabEvent();

const muiTheme = getMuiTheme(lightBaseTheme, {userAgent: 'all'});

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