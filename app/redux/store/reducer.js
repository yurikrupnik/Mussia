import {combineReducers} from 'redux';
import user from './../user/reducer';
import photos from '../../api/photos/reducer';
import galleries from '../../api/galleries/reducer';
import errors from './../errors/reducer';

const reducers = {
    user,
    galleries,
    photos,
    errors
};

export default combineReducers(reducers);