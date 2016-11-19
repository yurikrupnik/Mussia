import root from './root';
import payments from './payments';
import users from './users';
import error from './error';

// routes middlewares - error must be last
export default [
    root,
    payments,
    users,
    error
];



