import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import Material from '../../Wrappers/Material';

export default ({initialState}) => {
    console.log('initialState', initialState);
    
    let store = configureStore(initialState);

    console.log('store', store);

    let state = store.getState();

    console.log('state', state);

    return (
        <Provider store={store}>
            <Material />
        </Provider>
    )
}
