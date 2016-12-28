import {createStore} from 'redux';
import reducer from '../reducers/index';
import composed from './composed';

// get initial state and yebal
export let setInitialState = (state) => {
    return {}
};
export default createStore(reducer, {}, composed);

