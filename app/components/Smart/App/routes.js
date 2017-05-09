import PaymentsC from '../../../api/payments/component';
import Counter from '../Counter';
import Counters from '../Counters';
import Register from '../Register';
// import Settings from '../../Smart/Settings';
import Dashboard from '../Dashboard';
import Topics from '../Topics';

const routes = [
    {
        path: '/dashboard',
        component: Dashboard,
        title: 'Dashboard',
        exact: true
    },
    {
        path: '/topics',
        component: Topics,
        title: 'Topics',
        exact: true
    },
    {
        path: '/counter',
        component: Counter,
        title: 'Counter',
        exact: true
    },
    {
        path: '/counters',
        component: Counters,
        title: 'Counters',
        exact: true
    },
    {
        path: '/register',
        component: Register,
        title: 'Register',
        exact: true
    },
    {
        path: '/payments',
        component: PaymentsC,
        title: 'Payments',
        exact: true,
        routes: [
            // {
            //     path: '/payments/create',
            //     component: Create,
            //     exact: true
            // },
            // {
            //     path: '/payments/data',
            //     component: conected,
            //     exact: true,
            // },
            // {
            //     path: '/payments/data/:id',
            //     component: Edit,
            //     exact: true
            // }
        ]
    }
];

export default routes;