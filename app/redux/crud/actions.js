import createDeleteAction from './delete/actions';
import createReadActions from './read/actions';
import createCreateActions from './create/actions';
import createUpdateActions from './update/actions';

function createCrudActions(name, loading, url, mapToProps) {
    const read = createReadActions(name, loading, url, mapToProps);
    return {
        read,
        remove: createDeleteAction(name, loading, url, mapToProps, read),
        update: createUpdateActions(name, loading, url, mapToProps),
        create: createCreateActions(name, loading, url, mapToProps),
    }
}

export default createCrudActions;