import React from 'react';
import {Route} from 'react-router-dom';
import MaterialWrapper from '../../Utils/Material';
import ProviderWrapper from '../../Utils/Provider';
import routes from '../App/routes';

// import 'font-awesome/scss/font-awesome.scss' // load font awesome
import '../../../styles/vars.scss';
import '../../../styles/custom-styles.scss';
import 'flexboxgrid'; // load flexbox for grid system

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