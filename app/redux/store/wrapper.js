import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Material from '../../components/Material';

export default () => {
    return (
        <Provider store={store}>
            <Material />
        </Provider>
    )
}
