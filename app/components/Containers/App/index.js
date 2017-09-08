import React from 'react';
import {Route} from 'react-router-dom';
import MaterialWrapper from '../../Utils/Material';
import ProviderWrapper from '../../Utils/Provider';
import routes from '../App/routes';

const Layout = () => {
    return (
        <div>
            {routes.map(route => {
                return (<Route key={route.path} path={route.path} exact component={route.component} />);
            })}
        </div>
    );
};

export default ({initialState}) => {
    return (
        <ProviderWrapper component={<MaterialWrapper component={<Layout />}/>} initialState={initialState} />
    );
}