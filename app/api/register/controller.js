export let handlePost = (req, res) => {
    let body = req.body;
    console.log('body', body);
    req.checkBody(body.name, 'not valid name').isBase64();
    // req.checkBody('password', 'not valid name').isNumber();
    let errors = req.validationErrors();
    if (errors) {
        res.send(errors);
    } else {
        res.json([1, 23, 4]);
    }
};
