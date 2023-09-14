const service = require("../data");

const getAllCharacters = async (req, res) => {
    const characters = await service.getAll();
    return response(res, 200, characters);
};

module.exports = {
    getAllCharacters,
};
