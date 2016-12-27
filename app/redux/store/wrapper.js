import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import App from '../../components/App';

export default () => {
    return (
        <Provider store={store}>
           <App />
        </Provider>
    )
}
