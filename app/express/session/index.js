import session from 'express-session';
import connect from 'connect-mongo';
let MongoStore = connect(session);

export default (app, databaseUrl) => {
    app.use(session({
        secret: 'slomo',
        saveUninitialized: false,
        resave: false, // need to touch and then can use false as the value
        store: new MongoStore({url: databaseUrl})
    }));
}