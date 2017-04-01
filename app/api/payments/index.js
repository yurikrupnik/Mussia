import {GET} from './payment.controller';
import {URL} from './urls';
import router from './../../services/express/Router';
router.get(URL, GET);
// router.get(countURL, count);

export default router;
