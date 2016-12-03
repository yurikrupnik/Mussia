import React, {Component} from 'react';
import {render} from 'react-dom';
// import App from './components/App';
import MaterialWrapper from './components/Material';
import Wrapper from './redux/DevTools';


import {Provider} from 'react-redux';
import store from './redux/store/store';
// import DevTools from './components/';
// import App from '../components/App/App';

export default class Final extends Component {
    render() {
        // const {component, state} = this.props;
        return (
            <Provider store={store}>
                <div>
                    <MaterialWrapper />
                    <Wrapper/>
                </div>
            </Provider>)
    }
}

render(<Final/>, document.getElementById('root'));

