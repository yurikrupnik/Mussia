
import {createRead, createPost, createDelete} from '../util';

class CRUDActions {
    constructor(model) {
        this.read = createRead(model);
        this.post= createPost(model);
        this.delete = createDelete(model);
    }
}

export default CRUDActions;