import React, {Component} from 'react';
import configureStore from '../../../redux/store/store';
import {Provider} from 'react-redux';

// export default ({initialState, component}) => {
//     // state passed in the client - this is the pre load state of redux, defaults to empty object inside configureStore
//     let store = configureStore(initialState);
//     return (
//         <Provider store={store}>
//             {component}
//         </Provider>
//     )
// }

function withProvider(WrappedComponent, initialState) {
    return class extends Component {
        render() {
            let store = configureStore(initialState);
            return (
                <Provider store={store}>
                    <WrappedComponent />
                </Provider>
            )
        }
    }
}

export default withProvider;