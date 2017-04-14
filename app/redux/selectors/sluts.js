import * as actions  from '../actions/sluts';
import {getStateByModelPrefix, createDispatcher} from '../util'

const dispatchActions = createDispatcher(actions);

export {
    getStateByModelPrefix,
    dispatchActions
}
