import Payments from '../../api/payments/request';
import {createRead, createPost, createDelete} from '../util';

export const actions = {
    read: createRead(Payments),
    post: createPost(Payments),
    delete: createDelete(Payments),
    // put: createRead(Payments),
};
