function index(req, res) {

    res.json([12,4,5,6]);
}

function getTen(req, res) {
    res.json([
        {name: 'a'},
        {name: 'b'},
        {name: 'c'},
        {name: 'd'},
        {name: 'e'},
        {name: 'f'},
        {name: 'g'},
        {name: 'h'},
        {name: 'i'},
        {name: 'j'},
    ])

}

export {
    index,
    getTen
};