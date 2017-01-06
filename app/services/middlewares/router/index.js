import state from '../reduxState';
import renderHTML from '../render';
import matchRouter from '../matchRouter';

export default (app) => {
    app.get('*', [
        matchRouter,
        state,
        renderHTML,
    ]);
}