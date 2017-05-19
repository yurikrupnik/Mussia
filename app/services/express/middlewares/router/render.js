// render view template html - check views middleware
export default (req, res) => {
    if (req.url.match(/\//gi).length > 1) { // handle second slash in url error to load main.js todo-fix with webpack
        res.redirect(`/${req.url.split('/')[1]}`);
        return;
    }
    res.status(200);
    res.render('index');
}
