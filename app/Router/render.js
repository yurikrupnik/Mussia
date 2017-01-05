import React from 'react';
import configureStore from '../redux/store/store';
import AppWrapper from '../Wrappers/App';
import {renderToString} from 'react-dom/server';
import {render} from 'react-dom';

let state;

let renderServer = (res) => {
    res.status(200);
    res.render('index');
};

let renderHtml = (props, response) => {
    let app = renderToString(
        <AppWrapper state={{}} {...props}/>
    );

    let store = configureStore();
    state = store.getState();
    console.log('state', state);

    response.locals = {app, state};
    response.status(200);
    response.render('index');
    // renderServer(response);
};

let renderToDOM = (initialState = window.__PRELOADED_STATE__) => {
    render(<AppWrapper state={initialState} />, document.getElementById('root'));
};


export {
    renderHtml,
    renderToDOM
}
