import React from 'react';
import {Provider} from 'react-redux';
import configStore from './store';
import Material from '../../components/Material';

export default ({initialState}) => {
    let store = configStore(initialState);
    return (
        <Provider store={store}>
            <Material />
        </Provider>
    )
}
