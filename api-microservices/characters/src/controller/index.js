const characters = require("../characters.json");
const response = require("../utils/response");

const getAllCharacters = (req, res) => {
    return response(res, 200, characters);
};

module.exports = {
    getAllCharacters,
};
