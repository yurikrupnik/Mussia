import users from '../api/users';
import payments from '../api/payments';

// pass apis as array of middle wares
export default [
    users,
    payments
];
