import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// import store from './redux/store/store.js';
import 'flexboxgrid'; // load flexbox for grid system
import Counter from './components/counter/counter';
import stam from './components/Stam/index.ts';
console.log('stam', stam);

debugger
import io from 'socket.io-client';
let socket = io.connect('http://localhost:4000', {reconnect: true});
// import MaterialWrapper from './components/Material';

// export default class Final extends Component {
//     render() {
//         // const {component, state} = this.props;
//         return (
//             <Provider store={store}>
//                 <div>
//
//                     <MaterialWrapper />
//                 </div>
//             </Provider>)
//     }
// }

// render(Header, document.getElementById('row'));
render(<Counter />, document.getElementById('root'));