const characters = require("../characters.json");

const getAllCharacters = (req, res) => {
    res.status(200).json(characters);
};

module.exports = {
    getAllCharacters,
};
