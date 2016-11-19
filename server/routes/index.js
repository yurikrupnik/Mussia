import root, {rootUrl} from './root';
import error, {errorUrl} from './error';
import users, {usersUrl} from './users';
import payments, {paymentsUrl} from '../api/payments';

export default (app) => {
    app.use(rootUrl, root);
    app.use(paymentsUrl, payments);
    app.use(usersUrl, users);
    app.use(errorUrl, error); // must be last
}




