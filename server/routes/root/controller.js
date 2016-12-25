// render index.ejs
export default (req, res) => {
    console.log('req.cookies', req.cookies);
    console.log('req.session', req.session);

    res.status(200).render('index', {
        title: 'Yeee Baaalll'
    });
}