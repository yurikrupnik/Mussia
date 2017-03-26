import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';
import Users from '../../api/users/model';

function generateHash(password) {
    return bcrypt.hash(password, bcrypt.genSaltSync(10));
}

function validPassword(password, hash) {
    return bcrypt.compare(password, hash);
}

const localStrategyParameters = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
};


let localStrategy = (req, email, password, done) => {
    Users.findOne({email})
        .then((user) => {
            if (!user) {
                let nuser = { // todo use here some User model constructor
                    email: email,
                    password: password, // delete this, not saving passwords
                    name: 'admin',
                    id: 12345
                };
                return generateHash(password)
                    .then((hash) => {
                        nuser.hashPassword = hash;
                        Users.insert(nuser).then((newUs) => done(null, newUs));
                    });

            } else {
                validPassword(password, user.hashPassword)
                    .then((isValid) => {
                        if (!isValid) {
                            done(null, false);
                        } else {
                            done(null, user);
                        }
                    });
            }
        })
        .catch(done);
};

export default new LocalStrategy(localStrategyParameters, localStrategy);