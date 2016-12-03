import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import MaterialWrapper from './components/Material';

// import './components/style.SCSS';
import './styles.css';
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

