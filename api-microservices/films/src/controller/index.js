const films = require("../films.json");
const response = require("../utils/response");

const getAllFilms = (req, res) => {
    return response(res, 200, films);
};

module.exports = {
    getAllFilms,
};
