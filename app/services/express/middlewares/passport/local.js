import LocalStrategy from 'passport-local';
import Users from '../../../../api/users/model';
import {validatePassword, generateHash} from '../../../node/pass-hash';
const params = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
};

let strategy = (req, email, password, done) => {
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
                validatePassword(password, user.hashPassword)
                    .then((valid) => {
                        if (!valid) {
                            done(null, false);
                        } else {
                            done(null, user);
                        }
                    });
            }
        })
        .catch(done);
};

export default new LocalStrategy(params, strategy);