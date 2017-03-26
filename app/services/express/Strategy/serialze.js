import Users from '../../../api/users/model';

let serialize = (user, done) => done(null, user.id);
let deserialize = (id, done) => Users.findOne({id}, done);

export {
    serialize,
    deserialize
}