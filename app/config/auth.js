var FacebookStrategy = require('passport-facebook').Strategy;
var Users = require('../api/users/model');


export default (passport) => {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        Users.findOne({id}, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy(require('./secrets.json').facebook,
        // facebook will send back the token and profile
        function(token, refreshToken, profile, done) {

            // asynchronous
            process.nextTick(function() {

                // find the user in the database based on their facebook id
                Users.findOne({ 'id' : profile.id }, function(err, user) {

                    // if there is an error, stop everything and return that
                    // ie an error connecting to the database
                    if (err)
                        return done(err);

                    // if the user is found, then log them in
                    if (user) {
                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user found with that facebook id, create them
                        var newUser = {};

                        // set all of the facebook information in our user model
                        newUser.id    = profile.id; // set the users facebook id
                        newUser.token = token; // we will save the token that facebook provides to the user
                        newUser.name = profile.displayName;
                        // newUser.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                        // newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                        // save our user to the database
                        Users.insert(newUser).then(function(newUs) {
                            return done(null, newUs);
                        });
                    }

                });
            });

        }));
}