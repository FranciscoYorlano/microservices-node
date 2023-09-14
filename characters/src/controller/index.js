const service = require("../data");
const response = require("../utils/response");

const getAllCharacters = async (req, res) => {
    const characters = await service.getAll();
    return response.success(res, 200, characters);
};

module.exports = {
    getAllCharacters,
};
