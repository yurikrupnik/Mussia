import React from 'react';
import configureStore from '../../../redux/store/store';
import {Provider} from 'react-redux';

export default ({initialState, component}) => {
    let store = configureStore(initialState); // state passed in the client - this is the pre load state of redux, defaults to empty object inside configureStore
    return (
        <Provider store={store}>
            {component}
        </Provider>
    )
}

