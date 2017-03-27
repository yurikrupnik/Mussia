import FacebookStrategy from 'passport-facebook';
import Users from '../../../../api/users/model';
let secrets = require('./secrets.json');

function fbcallback(token, refreshToken, profile, done) {
    // asynchronous
    process.nextTick(function () {
        // find the user in the database based on their facebook id
        let id = profile.id;
        Users.findOne({id})
            .then(function (user) {
                // if the user is found, then log them in
                if (user) {
                    done(null, user); // user found, return that user
                } else {
                    // save our user to the database
                    Users.insert(profile._json).then((newUs) => done(null, newUs));
                }

            })
            .catch(done);
    });
}

export default new FacebookStrategy(secrets.facebook, fbcallback);
    // facebook will send back the token and profile