import {combineReducers} from 'redux';
import createLoadingWithNamedType from '../../../redux/crud/loader/reducer';
import createSchemaReducerByTagName from '../../../redux/crud/schema/reducer';
import {clientModel} from '../../../api/quizzes/config';
import data from '../../../redux/crud/reducer';

export default combineReducers({
    // current,
    schema: createSchemaReducerByTagName(clientModel),
    loading: createLoadingWithNamedType(clientModel),
    data: data(clientModel),
    // selected = [id]
    // editing ? {id, odlVal, newVal}
});