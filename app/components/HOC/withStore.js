import React, {Component} from 'react';
import {Provider} from 'react-redux';

function withProvider(WrappedComponent, store) {
    return class extends Component {
        render() {
            return (
                <Provider store={store}>
                    <WrappedComponent />
                </Provider>
            )
        }
    }
}

export default (WrappedComponent, store) => class extends Component {
    render() {
        return (
            <Provider store={store}>
                <WrappedComponent />
            </Provider>
        )
    }
}