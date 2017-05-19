
import db from '../../config/db';
export default db.get('users');

let userSchema = {
    email: 'example@example.com',
    hashPassword: '$2a$10$cR.A.nUT.BoLNLDqvvgYg.y/si6df/9cbJzX202gQwu.efjND7m2C.A.nUT.BoLNLDqvvgYg.y/si6df/9cbJzX202gQwu.efjND7m2C',
    hasToken: false,
    social: {
        facebook: {
            picture: {
                data: {
                    url: 'https://s3.amazonaws.com/uifaces/faces/twitter/jarjan/128.jpg'
                }
            }
        }
    }
};