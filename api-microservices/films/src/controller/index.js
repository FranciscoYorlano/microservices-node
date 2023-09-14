const films = require("../films.json");

const getAllFilms = (req, res) => {
    res.status(200).json(films);
};

module.exports = {
    getAllFilms,
};
