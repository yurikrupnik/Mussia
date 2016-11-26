import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import DevTools from '../DevTools';
import App from '../../components/App';
//  <App context={state.context}>{component}</App>

export default class Wrapper extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const {component, state} = this.props;
        return (
            <Provider store={store}>
                <div>
                    <App DevTools/>
                </div>
            </Provider>)
    }
}
