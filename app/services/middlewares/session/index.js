import session from 'express-session';
import connect from 'connect-mongo';
import {databaseUrl} from '../../../config/env';
let MongoStore = connect(session);
let opts = {url: databaseUrl};

export default (app) => {
    app.use(session({
        secret: 'slomo',
        saveUninitialized: false,
        resave: true,
        store: new MongoStore(opts)
    }));
}