import users from './users';
import payments from './payments';
import friends from './friends';

// pass apis as array of middle wares
export default [
    users,
    payments,
    friends
];
