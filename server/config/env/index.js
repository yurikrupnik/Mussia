import path from 'path';

export const root = path.join(__dirname + '/../..');

export const env = process.env.NODE_ENV || 'development';
export const port = process.env.PORT || 4000;
export const ip = process.env.IP || '0.0.0.0' || 'localhost';
export const host = process.env.WEBSITE_HOSTNAME || `http://${ip}:${port}`;
export const databaseUrl = process.env.DATABASE_URL ||'mongodb://localhost/mussia';
export const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID = '144997135988664';
export const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET = '483b8bb0f0aeb26744033814ef8fbc91';

// export const analytics = {
//     https://analytics.google.com/
    // google: { trackingId: process.env.GOOGLE_TRACKING_ID || 'UA-XXXXX-X' },
//
// };

export const auth = {

    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

    // https://developers.facebook.com/
    facebook: {
        id: process.env.FACEBOOK_APP_ID || '186244551745631',
        secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc',
    },

    // https://cloud.google.com/console/project
    google: {
        id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
        secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd',
    },

    // https://apps.twitter.com/
    twitter: {
        key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
        secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ',
    }

};

// let all = {
//     env: process.env.NODE_ENV || 'development',
//
//     // Root path of server
//     root: path.join(__dirname + '/../..'),
//     // Server port
//     port: process.env.PORT || 4000,
//
//     // Server IP
//     ip: process.env.IP || 'localhost',
//
//     // url
//     url: function () {
//         return `http://${all.ip}:${all.port}`;
//     },
//
//     host: `localhost${all.port}`,
//
//     // Should we populate the DB with sample data?
//     seedDB: false,
//
//     // Secret for session, you will want to change this and make it an environment variable
//     secrets: {
//         session: 'mussia-secret'
//     },
//
//     // MongoDB connection options
//     mongo: {
//         options: {
//             db: {
//                 safe: true
//             }
//         }
//     },
//
//     facebook: {
//         clientID: process.env.FACEBOOK_ID || 'id',
//         clientSecret: process.env.FACEBOOK_SECRET || 'secret',
//         callbackURL: (process.env.DOMAIN || '') + '/auth/facebook/callback'
//     },
//
//     twitter: {
//         clientID: process.env.TWITTER_ID || 'id',
//         clientSecret: process.env.TWITTER_SECRET || 'secret',
//         callbackURL: (process.env.DOMAIN || '') + '/auth/twitter/callback'
//     },
//
//     google: {
//         clientID: process.env.GOOGLE_ID || 'id',
//         clientSecret: process.env.GOOGLE_SECRET || 'secret',
//         callbackURL: (process.env.DOMAIN || '') + '/auth/google/callback'
//     }
// };



// Export the config object based on the NODE_ENV
// ==============================================
// module.exports = _.merge({},
//     all)
    // require('./shared'),
    // require('./' + process.env.NODE_ENV + '.js') || {});

// export default all;