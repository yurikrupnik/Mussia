let handle404 = (req, res, next) => {
    res.status(404).render('error', {url: req.originalUrl});
};

let firstError = (err, req, res, next) => {
    // any errors i throw
    // log it
    console.errors(err.stack);
    res.json('errors of some kind');
};
export default (app) => {
    app.use(handle404);
    app.use(firstError);
}