import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store/store.js';

import 'flexboxgrid'; // load flexbox for grid system
import './services/socket/client';

import Wrapper from './redux/store/wrapper';

// // import MaterialWrapper from './components/Material';
//
// export default class Final extends Component {
//     render() {
//         // const {component, state} = this.props;
//         return (
//             <Provider store={store}>
//                 <div id="some">
//                     hello
//                 </div>
//             </Provider>)
//     }
// }

render(<Wrapper />, document.getElementById('root'));