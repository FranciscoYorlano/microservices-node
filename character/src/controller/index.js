const getAllCharacter = require("./getAllCharacter");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

module.exports = {
    getAllCharacters: asyncErrorHandler(getAllCharacter),
};
