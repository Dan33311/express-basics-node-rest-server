exports.get_tournament = (req, res) => {
    res.json('get tournament controller working')
};

exports.post_tournament = (req, res) => {

    let tournament = req.body
    res.json({ tournament })
};

exports.put_tournament = (req, res) => {

    let id = req.params.id
    res.json({ id })
};

exports.delete_tournament = (req, res) => {
    res.json('delete tournament controller working')
};



// Para realizar un test en postman cambiamos a res.json('____'),
// y en postman con localhost:3009/prueba1 (working)