const service = require("../data");
const response = require("../utils/response");

const getAllPlanets = async (req, res) => {
    const planets = await service.getAll();
    return response.success(res, 200, planets);
};

module.exports = {
    getAllPlanets,
};
