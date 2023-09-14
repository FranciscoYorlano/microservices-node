const service = require("../data");

const getAllPlanets = async (req, res) => {
    const planets = await service.getAll();
    return response(res, 200, planets);
};

module.exports = {
    getAllPlanets,
};
