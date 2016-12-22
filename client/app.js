import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import MaterialWrapper from './components/Material';
import 'flexboxgrid'; // load flexbox for grid system
import io from 'socket.io-client';
let socket = io.connect('http://localhost:4000', {reconnect: true});
export default class Final extends Component {
    render() {
        // const {component, state} = this.props;
        return (
            <Provider store={store}>
                <div>
                    <MaterialWrapper />
                </div>
            </Provider>)
    }
}

render(<Final/>, document.getElementById('root'));

