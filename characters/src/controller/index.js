const getAllCharacters = require("./getAllCharacters");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

module.exports = {
    getAllCharacters: asyncErrorHandler(getAllCharacters),
};
