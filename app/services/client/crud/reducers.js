import _ from 'lodash';

export const reduceReadPending = (state, payload) => Object.assign({}, state, {active: true});
export const reduceReadFulfilled = (state, payload) => Object.assign({}, state, {active: false, data: payload});
export const reduceError = (state, payload) => Object.assign({}, state, {error: {fuck: true}});
export const reduceDeletePending = (state, payload) => Object.assign({}, state, {active: true});
export const reduceDeleteFulfilled = (state, payload) => {
    const data = state.data.filter(val => !_.includes(payload, val._id));
    return Object.assign({}, state, {active: false, data});
};
export const reduceCreatePending = (state, payload) => Object.assign({}, state, {active: true});
export const reduceCreateFulfilled = (state, payload) => Object.assign({}, state, {
    active: false,
    data: [...state.data, payload]
});
export const reduceUpdatePending = (state, payload) => Object.assign({}, state, {active: true});
export const reduceUpdateFulfilled = (state, payload) => Object.assign({}, state, {active: false});
