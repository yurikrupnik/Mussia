import root, {rootUrl} from './root';
import register, {registerUrl} from './register';
import users, {usersUrl} from '../api/users';
import payments, {paymentsUrl} from '../api/payments';
import friends, {friendsUrl} from '../api/friends';

export default (app) => {
    app.use(rootUrl, root);
    app.use(usersUrl, users);
    app.use(registerUrl, register);
    app.use(paymentsUrl, payments);
    app.use(friendsUrl, friends);
}
