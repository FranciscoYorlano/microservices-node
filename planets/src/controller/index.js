const getAllPlanets = require("./getAllPlanets");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

module.exports = {
    getAllPlanets: asyncErrorHandler(getAllPlanets),
};
