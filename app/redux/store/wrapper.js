import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import Material from '../../components/Material';

export default ({initialState}) => {
    let store = configureStore(initialState);
    return (
        <Provider store={store}>
            <Material />
        </Provider>
    )
}
