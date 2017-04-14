import Payments from '../../api/payments/request';
import {createFetch} from '../util';

export const fetch = createFetch(Payments);
