import {READ, CREATE, UPDATE, DELETE} from './payment.controller';
import {URL} from './config';
import router from './../../services/express/Router';

router.get(URL, READ);
router.post(URL, CREATE);
// router.put(URL, UPDATE);
router.delete(URL, DELETE);

export default router;
