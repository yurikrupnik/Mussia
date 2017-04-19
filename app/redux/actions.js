import {createRead, createPost, createDelete} from './util';

class Actions { // crud actions for the client - create by model
    constructor(model) {
        this.read = createRead(model);
        this.post= createPost(model);
        this.delete = createDelete(model);
    }
}

export default (model) => new Actions(model);