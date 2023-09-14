const service = require("../data");

const getAllFilms = async (req, res) => {
    const films = await service.getAll();
    return response(res, 200, films);
};

module.exports = {
    getAllFilms,
};
