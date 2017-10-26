import React from 'react';
import Users from './users';

const routes = [
    {
        path: '/admin/users',
        component: Users
    },
    {
        path: '/admin/*',
        component: () => {
            return <div>admin route does not exist</div>
        }
    }
];

export default routes;