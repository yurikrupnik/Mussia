import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import DevTools from '../components/DevTools/DevTools';
import App from '../components/App';

export default class Wrapper extends Component {

    render() {
        const {component, state} = this.props;
        return (
            <Provider store={store}>
                <div>
                    <App context={state.context}>{component}</App>
                    <DevTools/>
                </div>
            </Provider>)
    }
}
