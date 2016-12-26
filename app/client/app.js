
import React, {Component} from 'react';
import {render} from 'react-dom';
// import counter from '../app/components/counter/counter';
// import Header from '../server/components/Header/header';
function Header(props) {
    // Correct! This use of <div> is legitimate because div is a valid HTML tag:
    return '<div id="roow">Hello {props.toWhat}</div>';
}
// import {Provider} from 'react-redux';
// import store from './redux/store/store';
// import MaterialWrapper from './components/Material';
// import 'flexboxgrid'; // load flexbox for grid system
// import io from 'socket.io-client';
// let socket = io.connect('http://localhost:4000', {reconnect: true});
//
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
//
render(Header, document.getElementById('row'));

