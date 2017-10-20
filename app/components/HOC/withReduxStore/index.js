import React, {Component} from 'react';
import {Provider} from 'react-redux';

export default (WrappedComponent, store) => class extends Component {
    render() {
        return (
            <Provider store={store}>
                <WrappedComponent />
            </Provider>
        )
    }
}