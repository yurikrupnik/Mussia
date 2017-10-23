import {url, clientModel, selector} from './config';
import createLoading from '../../redux/crud/loader/actions';
import createSchemaActions from '../../redux/crud/schema/actions';
import createCrudActions from '../../redux/crud/actions';
import {createSelectorByName} from '../../redux/crud/selectors';

const loading = createLoading(clientModel);

const dataSelector = createSelectorByName(selector);

const getSchema = createSchemaActions(clientModel, loading, url, dataSelector);
const crudActions = createCrudActions(clientModel, loading, url, dataSelector);
const read = crudActions.read;
const remove = crudActions.remove;
const create = crudActions.create;
const update = crudActions.update;

export {
    read,
    remove,
    create,
    update,
    getSchema
}