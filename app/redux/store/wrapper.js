import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Material from '../../components/Material';

export default ({props}) => {
    console.log('props', props);

    return (
        <Provider store={store}>
            <Material />
        </Provider>
    )
}
