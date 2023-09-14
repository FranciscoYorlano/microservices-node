const planets = require("../planets.json");
const response = require("../utils/response");

const getAllPlanets = (req, res) => {
    return response(res, 200, planets);
};

module.exports = {
    getAllPlanets,
};
