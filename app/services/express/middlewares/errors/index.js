

let firstError = (err, req, res, next) => {
    // any errors i throw
    // log it
    console.error(err.stack); // todo play with error
    next(err);
    // res.json('errors of some kind');
};

let secondError = (err, req, res, next) => {
    console.log('err', err);
    throw new Error(err);
};
export default (app) => {
    app.use(firstError);
    app.use(secondError);
}