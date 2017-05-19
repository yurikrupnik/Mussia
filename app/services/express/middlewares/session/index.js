import session from 'express-session';
import connect from 'connect-mongo';
import {databaseUrl} from '../../../../config/env';
let MongoStore = connect(session);
let opts = {url: databaseUrl};

function handleSession(req, res, next) {
    if (req.user && req.isAuthenticated()) {
        console.log('req.isAuthenticated()', req.isAuthenticated());

        next();
    }
    next();
}

export default (app) => {
    app.use(session({
        secret: 'slomo',
        saveUninitialized: false,
        resave: false, // need to touch and then can use false as the value
        store: new MongoStore(opts)
    }));

    app.use(handleSession)
}