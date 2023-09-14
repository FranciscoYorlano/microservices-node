const service = require("../data");
const response = require("../utils/response");

const getAllFilms = async (req, res) => {
    const films = await service.getAll();
    return response.success(res, 200, films);
};

module.exports = {
    getAllFilms,
};
