import React, {PropTypes, Component} from 'react';
import Router from '../../Wrappers/Router';
import Provider from '../Provider';

export default class AppWrapper extends Component {
    static propTypes = {
        initialState: PropTypes.object, // not required on server side rendering
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {initialState} = this.props; // pass initial state of the app - redux currently
        return (
            <Provider initialState={initialState} component={<Router {...this.props}/>} />
        );
    }
}