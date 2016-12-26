// render index.ejs
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import Counter from '../../components/counter/counter';
import Header from '../../components/Header/header';
export default (req, res) => {
    // console.log('req.cookies', req.cookies);
    // console.log('req.session', req.session);

    // console.log('res', res);
    // let val = 1;
    let app = ReactDOMServer.renderToString(
        <Header />
    );

    // res.locals.yebal = 'shalom';
    // res.cookie('yebla', 'yebal dva raza');
    res.status(200);
    // res.render('index');
    res.render('index', {app: app, title: 'new tot;e'});

    // setInterval(function () {
        // res.json(html)
    // }, 1000);
    // res.status(200).render('index', {
    //     title: 'Yeee Baaalll',
    //     // yebal: 'sss'
    //     // cookie: res.cookie
    // });
}