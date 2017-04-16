import {actions}  from '../actions/payments';
import {getStateByModelPrefix, createDispatcher} from '../util'

const dispatchActions = createDispatcher(actions);

export {
    getStateByModelPrefix,
    dispatchActions
}
