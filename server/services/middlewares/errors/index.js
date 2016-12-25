let handle404 = (req, res, next) => {
    res.status(404).render('error', {url: req.originalUrl});
};

let firstError = (err, req, res, next) => {
    // any errors i throw
    // log it
    console.error(err.stack); // todo play with error
    next(err);
    // res.json('errors of some kind');
};

let secondError = (err, req, res, next) => {
    console.log('err', err);
};
export default (app) => {
    app.use(handle404);
    app.use(firstError);
}