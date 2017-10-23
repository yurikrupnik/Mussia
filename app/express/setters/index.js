import helmet from 'helmet';
export default (app) => {
    app.use(helmet());
    // app.set('x-powered-by', false);
    // app.set('view cache', true);
}