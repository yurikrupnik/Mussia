import users from '../api/users';
import payments from '../api/payments';
import sluts from '../api/sluts';

// pass apis as array of middle wares
export default [
    users,
    payments,
    sluts
];
