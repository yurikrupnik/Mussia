import React from 'react';
import configureStore from '../redux/store/store';
import AppWrapper from '../Wrappers/App';
import {renderToString} from 'react-dom/server';
import {render} from 'react-dom';


let renderHtml = (props, response) => {
    let store = configureStore();
    let app = renderToString(
        <AppWrapper {...props}/>
    );
    let state = store.getState();
    response.locals = {app, state};
    response.status(200);
    response.render('index');
};

let renderToDOM = (state) => {
    render(<AppWrapper state={state} />, document.getElementById('root'));
};


export {
    renderHtml,
    renderToDOM
}
