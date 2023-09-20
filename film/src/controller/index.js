const getAllFilm = require("./getAllFilm");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

module.exports = {
    getAllFilms: asyncErrorHandler(getAllFilm),
};
