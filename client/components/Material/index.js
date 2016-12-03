import React, {Component} from 'react';
import App from '../App/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require("react-tap-event-plugin")();
export default class MaterialWrapper extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MuiThemeProvider>
                <App/>
            </MuiThemeProvider>
        )
    }
}

