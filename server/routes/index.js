import root, {rootUrl} from './root';
import error, {errorUrl} from './error';
import users from './users';
import payments, {paymentsUrl} from '../api/payments';
import friends, {friendsUrl} from '../api/friends';

export default (app) => {
    app.use(rootUrl, root);
    app.use('/', users); // todo make same as db routes
    app.use(paymentsUrl, payments);
    app.use(friendsUrl, friends);
    app.use(errorUrl, error); // must be last
}
