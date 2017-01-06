import api from '../../../api'; // array api middleware
let preset = '/api';
export default (app) => {
    app.use(preset, api); // load all api middlewares
}
