import users from '../api/users';
import payments from '../api/payments';
import friends from '../api/friends';

// pass apis as array of middle wares
export default [
    users,
    payments,
    friends
];
