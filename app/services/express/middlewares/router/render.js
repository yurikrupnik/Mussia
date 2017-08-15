// render view template html - check views middleware
export default (req, res) => {
    const match = routes.reduce((acc, route) => {
        return matchPath(req.url, route, { exact: true }) || acc;
    }, null);
    if (!match) {
        res.status(404).send(serverRender(<div>Sorry, no match</div>));
        return;
    }

    res.status(200).send(serverRender(
        (
            <Router context={{}} location={req.url}>
                <App />
            </Router>
        ),
        res.locals.state
    ));
}
