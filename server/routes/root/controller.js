// render index.ejs
export default (req, res) => {
    res.status(200).render('index', {
        title: 'Yeee Baaalll'
    });
}