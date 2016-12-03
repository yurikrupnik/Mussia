import root, {rootUrl} from './root';
import users, {usersUrl} from './users';
import payments, {paymentsUrl} from '../api/payments';
import friends, {friendsUrl} from '../api/friends';

export default (app) => {
    app.use(rootUrl, root);
    app.use(usersUrl, users); // todo make same as db routes
    app.use(paymentsUrl, payments);
    app.use(friendsUrl, friends);
}
