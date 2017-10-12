import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../../../redux/store/store';

function withProvider(WrappedComponent, initialState) {
    return class extends Component {
        render() {
            return (
                <Provider store={configureStore(initialState)}>
                    <WrappedComponent />
                </Provider>
            )
        }
    }
}

export default withProvider;