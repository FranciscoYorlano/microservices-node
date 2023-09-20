const getAllPlanet = require("./getAllPlanet");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

module.exports = {
    getAllPlanets: asyncErrorHandler(getAllPlanet),
};
