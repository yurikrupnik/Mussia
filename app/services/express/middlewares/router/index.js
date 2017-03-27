import state from './state';
import render from './render';
import matchRouter from './matchRouter';

export default (app) => {
    app.get('*', [
        matchRouter,
        state,
        render,
    ]);
}