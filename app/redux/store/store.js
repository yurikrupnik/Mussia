import {createStore} from 'redux';
import reducer from '../reducers/index';
// import composed from './composed';

// export default createStore(reducer, {}, composed); // client
export default createStore(reducer) // server

