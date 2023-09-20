const getAllFilms = require("./getAllFilms");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

module.exports = {
    getAllFilms: asyncErrorHandler(getAllFilms),
};
