import React from 'react';
import Profiles from './profile';
import Attachments from './attachment';

const routes = [
    {
        path: '/settings/attachment',
        component: Attachments
    },
    {
        path: '/settings/profiles',
        component: Profiles
    },
    {
        path: '/settings/*',
        component: () => {
            return <div>settings route does not exist</div>
        }
    }
];

export default routes;